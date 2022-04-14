import React , {useState,useEffect} from 'react'
import axios from "./axios"
import requests from "./requests"
import "./Banner.css"

function Banner() {
  const [movies,setMovies] = useState([]);
  useEffect(() => {
    
    async function fetchData(){
      const request = await axios.get(requests.FetchNo);
      setMovies(
        request.data.results[Math.floor(Math.random() * request.data.results.length -1)]
      );
      return request;
      
    };
   
    fetchData();
    
    
    
  }, []);


console.log(movies)



  return (
    <header
    className='banner'
    style={{
      backgroundSize:"cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
      backgroundPosition: "center center",
    }}
    >
    <div className='banner-contents'>
    <h1 className='banner-title' >{movies?.title || movies?.original_name || movies?.name}</h1>
     <div className='banner-buttons'>
       <button className='banner-button'>Play</button>
       <button className='banner-button'>My List</button>
     </div>
    <h1 className='banner-description' >
      {movies?.overview}
    </h1>
    </div>
    <div className='banner-fade' ></div>

    </header>
  )
}

export default Banner
