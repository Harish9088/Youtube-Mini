import React from 'react'
import VideoItem from "./VideoItem"

export default function VideoList({videos,videoSelect}) {
  return (
    <div className="videoList" >
       {videos.map(video=>
       {
            return <div className="videoListItem" >
      <VideoItem 
      videoSelect={videoSelect}
      image={video.snippet.thumbnails.medium.url} 
      id={video.id.videoId} 
      title={video.snippet.title} 
      channel={video.snippet.channelTitle}
      
      />
      
          </div>
       })}

    </div>
  )
}
