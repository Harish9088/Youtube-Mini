import React,{useState} from 'react'
import SearchBar from "./SearchBar"
import VideoItem from "./VideoItem"
import Api from "../api/youtube"
import VideoList from "./VideoList"
import VideoDetail from './VideoDetail'

function Videos() {
    const [input,setInput]=useState("")
    const [videos,setVideos]=useState([])
    const [src,setSrc]=useState({
      link:"",
      title:"",
      channel:""
    })
    const handleSubmit=async (e,input)=>{
       e.preventDefault();
      const response=await Api.get('/search',{
          params:{
              q:input
          }
      })
      setVideos(response.data.items)
      console.log(response)
      setSrc({
        link:`https://www.youtube.com/embed/${response.data.items[0].id.videoId}`,
        title:response.data.items[0].snippet.title,
       channel:response.data.items[0].snippet.channelTitle
      })
      setInput("")
  }
  const handleChange=(e)=>{
    setInput(e.target.value)
  }
 
  const handleClick=(event)=>{
     if(event.charCode===13){
        handleSubmit()
     }
  }
   const videoSelect=(e)=>{
     
     setSrc({
       link:`https://www.youtube.com/embed/${e.target.id}`,
       title:e.target.title,
       channel:e.target.attributes.channel.value
     })
  }

   return (
    <>
          <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} handleClick={handleClick} input={input}/>
       <div className="videoContainer">   
       <VideoDetail src={src}/>
         <VideoList videos={videos} videoSelect={videoSelect} />
</div>
             </>
          )
}
export default Videos
