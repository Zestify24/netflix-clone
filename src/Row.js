import React , {useEffect,useState} from 'react'
import requests from './requests';
import axios from "./axios";
import "./Rows.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({title,fetchUrl,isLargeRow}) {
  const [movies,setMovies] = useState([]);
  const  baseURL= "https://image.tmdb.org/t/p/original/" 
  const [trailerUrl, setTrailerUrl] = useState(""); //Store trailers

  useEffect(() => {
    
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return requests;
      
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    // If player is open, close it
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          //Get parameters from URL https://www.youtube.com/watch?v=9bZkp7q19f0
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          // Get parameters with the key "v"
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  


  return (
    <div className='row'>
       <h2 className='row-text' >{title}</h2>
       <div className='row-posters'>
         {movies.map(movie => (
           <img 
           key={movie.id} //Optimisation
           onClick={() => handleClick(movie)}
           className={`row-poster ${ isLargeRow && "row-poster-l"}`}
           src={`${baseURL}${isLargeRow? movie.poster_path:movie.backdrop_path }`}
           />
         ))}

       </div>
       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row