import React from 'react';
import { VideoItem } from '../video_item/video_item.jsx';

export default function VideoList(props) {
  return (
    <ul>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
}
