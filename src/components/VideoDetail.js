import React from 'react'

function VideoDetail({src}) {
 return (
    <section className="videoDetail">
      <iframe className="iFrame" width="750px" height="450px" src={src.link} title={src.title} channel={src.channel}/>
      <h2 className="videoTitle">{src.title}</h2>
      <p >{src.channel}</p>
    </section>
  )
}

export default VideoDetail
// const [src,setSrc]=useState(`https://www.youtube.com/embed/${video[0]}`)
