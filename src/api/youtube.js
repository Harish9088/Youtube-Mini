import axios from "axios";
const KEY="AIzaSyDUx6uypCwVz6FMPwroL5twGPlfk9pZzaY"
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    
        params:{
           part:"snippet",
            maxResult:1,
        key:KEY
        
        
       } 
    
});
