import React from 'react';
import styles from './video_list.module.css';
import { VideoItem } from '../video_item/video_item.jsx';

export default function VideoList(props) {
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
}
