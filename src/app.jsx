import { useEffect, useState } from 'react';
import styles from './app.module.css';
import { SearchHeader } from './components/search_header/search_header.jsx';
import VideoList from './components/video_list/video_list.jsx';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((items) => setVideos(items));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((item) => setVideos(item));
  }, []);
  return (
    <div className={styles.container}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
