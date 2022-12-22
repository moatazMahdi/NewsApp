import React,{useState,useEffect} from "react";
import News from "./News";


 export default  getNewsFromApi =()=> {
    const [news, setNews] = useState([])
    News.get('top-headlines?country=us&category=business&apiKey=96fb1c0a4f894c418b2c151ff96bb11f')
      .then( (response)=> {
        setNews(response.data.news)
        // console.log(news)
      }).catch( (error)=> {
        console.log(error)
      })
    if (!news) {
    return null
  }
  }



