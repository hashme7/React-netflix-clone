import axios from "axios";
import React, { useEffect, useState } from "react";
import endpoints, { createUrl } from "../services/moivesServices";

function Hero() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      let movies = response.data.results;
      let rondomMovie = movies[Math.floor(Math.random() * movies.length)];
      console.log(rondomMovie);
      setMovie(rondomMovie);
    });
  }, []);
  const truncate = (str,length)=>{
    if(!str)return '';
    return str.length>length?str.slice(0,length)+'...':str;
  }

  if (!movie) {
    return (
      <>
        <p>fetching movie...</p>
      </>
    );
  }
  const { title, backdrop_path, release_date, overview } = movie;
  return (
    <div className="w-full h-[450px] lg:h-[650px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[450px] lg:h-[650px] bg-gradient-to-r from-black">
          <img
            className="w-full h-full object-cover object-top"
            src={createUrl(backdrop_path,'original')}
            alt={title}
          />
        </div>
        <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
          <div className="mt-8 mb-4">
            <button className="capitalize border border-gray-300 py-2 px-5 ml-4">
              play
            </button>
            <button className="capitalize border border-gray-300 py-2 px-5 ml-4">
              watch later
            </button>
          </div><div>
      
      </div>
          <p className="text-gray-400 text-sm">{release_date}</p>
          <p className="w-full md:max-v-[70%] lg:max-w-[50%] xl:max[35%] text-gray-200">{truncate(overview,165)}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
