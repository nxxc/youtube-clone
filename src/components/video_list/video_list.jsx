import React from 'react';
import styles from './video_list.module.css';
import VideoItem from '../video_item/video_item.jsx';

const VideoList = ({ videos, onClick, display }) => (
  <ul className={styles.videos}>
    {videos.map((video) => (
      <VideoItem
        key={video.id}
        video={video}
        onClick={onClick}
        display={display}
      />
    ))}
  </ul>
);

export default VideoList;
