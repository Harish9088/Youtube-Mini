import React from 'react'
import VideoItem from "./VideoItem"

export default function VideoList({videos,videoSelect}) {
  return (
    <section className="videoList" >
       {videos.map(video=>
       {
            return <div  key={video.id.videoId} >
      <VideoItem 
      videoSelect={videoSelect}
      image={video.snippet.thumbnails.medium.url} 
      id={video.id.videoId} 
      title={video.snippet.title} 
      channel={video.snippet.channelTitle}
       />
       </div>
       })}

    </section>
  )
}
