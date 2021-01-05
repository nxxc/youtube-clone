import { useEffect, useState } from 'react';
import styles from './app.module.css';
import { SearchHeader } from './components/search_header/search_header.jsx';
import VideoList from './components/video_list/video_list.jsx';

function App() {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDDazUfGdBl_DEUKV94I9-lOe989LN_6cw`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId })),
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log('error', error));
  };

  const getPopularList = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDDazUfGdBl_DEUKV94I9-lOe989LN_6cw',
      requestOptions,
    )
      .then((response) => response.json())
      .then((res) => setVideos(res.items))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    getPopularList();
  }, []);
  return (
    <div className={styles.container}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
