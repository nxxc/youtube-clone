import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header.jsx';
import VideoDetail from './components/video_detail/video_detail.jsx';
import VideoList from './components/video_list/video_list.jsx';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const search = (query) => {
    youtube
      .search(query) //
      .then((items) => setVideos(items));
    setSelectedVideo(null);
  };

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((item) => setVideos(item));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
