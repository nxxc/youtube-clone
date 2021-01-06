import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => {
  console.log(video);
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        title='youtube player'
        type='text/html'
        width='100%'
        height='500px'
        src={`http://www.youtube.com/embed/${video.id}`}
        allowFullScreen
      ></iframe>
      <div>
        <h2 className={styles.title}>{video.snippet.title}</h2>
        <h3 className={styles.channelTitle}>{video.snippet.channelTitle}</h3>
        <pre className={styles.description}>{video.snippet.description}</pre>
      </div>
    </section>
  );
};

export default VideoDetail;
