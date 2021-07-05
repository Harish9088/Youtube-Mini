// import Axios from 'axios'
import React from 'react'
import Videos from './Videos'


function VideoItem({videos,src,videoSelect}) {


  //  console.log(src)

  return (
    <div>
      
      <iframe width="700px" height="400px" src={src.link} title={src.text}/>
    </div>
  )
}

export default VideoItem
// const [src,setSrc]=useState(`https://www.youtube.com/embed/${video[0]}`)