import React from 'react'

export default function VideoList({videos,videoSelect}) {
  return (
    <div className="videoList" >
       {videos.map(video=>
       {
            return <div className="videoListItem" onClick={videoSelect}>
      
      <img 
      src={video.snippet.thumbnails.medium.url} 
      alt={video.snippet.channelTitle} 
      id={video.id.videoId}
      />
      <h3>{video.snippet.channelTitle}</h3>
      <p>{video.snippet.description}</p>
          </div>
       })}

    </div>
  )
}
