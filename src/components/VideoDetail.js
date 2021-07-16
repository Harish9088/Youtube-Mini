import React from 'react'

function VideoDetail({src}) {
 return (
    <div className="videoDetail">
      <iframe width="750px" height="450px" src={src.link} title={src.title} channel={src.channel}/>
      <div className="videoText">
      <h2>{src.title}</h2>
      <p >{src.channel}</p>
      </div>
    </div>
  )
}

export default VideoDetail
// const [src,setSrc]=useState(`https://www.youtube.com/embed/${video[0]}`)
