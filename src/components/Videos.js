import React,{useState} from 'react'
import SearchBar from "./SearchBar"
import VideoItem from "./VideoItem"
import Api from "../api/youtube"
import VideoList from "./VideoList"

function Videos() {
    const [input,setInput]=useState("")
    const [videos,setVideos]=useState([])
    
    const [src,setSrc]=useState({
      link:"",
      text:""
    })
    const handleSubmit=async (e,input)=>{
      
      e.preventDefault();
      const response=await Api.get('/search',{
          params:{
              q:input
          }
      })
      // setInput(response.data)
      setVideos(response.data.items)
      console.log(videos)
      setSrc({
        link:`https://www.youtube.com/embed/${videos[0].id.videoId}`,
       text:videos[0].snippet.channelTitle
      })
      setInput("")
  }
  const handleChange=(e)=>{
    setInput(e.target.value)
  }
  const videoSelect=(e)=>{
     
     setSrc({
       link:`https://www.youtube.com/embed/${e.target.id}`,
       text:e.target.alt
     })
  }

  
      return (
    <>
          <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} input={input}/>
          <VideoItem videos={videos} src={src} />  
         <VideoList videos={videos} videoSelect={videoSelect} />
</>
          

        
    )
}

export default Videos
