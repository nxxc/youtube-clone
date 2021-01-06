import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video: { snippet }, onClick, video, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  console.log(display);
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => {
        onClick(video);
      }}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt='video thumbnail'
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
