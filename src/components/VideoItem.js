import React from 'react'

function VideoItem({image,title,channel,id,videoSelect}) {
  return (
    <div className="videoItem" onClick={videoSelect}>
      <img src={image} id={id} alt={channel} title={title} channel={channel} className="itemImage" />
      <div className="itemDetails">
      <h5 id={id} title={title} channel={channel}>{title}</h5>
      <p id={id} title={title} channel={channel} className="itemChannel">{channel}</p>
      </div>
      </div>
  )
}
export default VideoItem
