import {React, useEffect, useState} from 'react';

import Navbar from "./Navbar";
import Charecters from "./Charecters";
import "./main.css";
import "./header.css";
import Episode from './Episode';


export default function Main() {

  const [episodes, setEpisodes] = useState("");
  const [eachEpisodeInfo, setEachEpisodeInfo] = useState("");

  useEffect(() => {
      fetch("https://rickandmortyapi.com/api/episode")
      .then((res)=> res.json())
      .then((data)=>{
        setEpisodes(data);
      });

    }, []);


  const fetchEachEpisode =(id)=>{   // 
    const fetchEachEpisodeResult = episodes.results.filter((episode)=>{

      if(episode.id === id){
          const episodeURL = episode.url;
      
          const result = fetch(episodeURL)
            .then((res)=> res.json())
            .then((data)=>{
                //console.log(data);
                return setEachEpisodeInfo(data);  
            })
            return result;
        }else{
          return null
      }
    })
      
    return fetchEachEpisodeResult;
  }

  console.log(eachEpisodeInfo.name);

  const pagination =()=>{
      console.log("page func")
      if(episodes){
   
        const URL = episodes.info.next 
        ? episodes.info.next 
        : "https://rickandmortyapi.com/api/episode";
        
        fetch(URL)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            return setEpisodes(data);  
        })
      }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-sm-12 border border-dark">
          <Navbar 
            episodes={episodes}
            pagination={pagination}
            fetchEachEpisode={fetchEachEpisode}
          />
        </div>

        <div className="col-lg-9 col-sm-12 border border-dark">
          2 of 2
          <Episode
            eachEpisodeInfo={eachEpisodeInfo} 
          />
          <Charecters /> 
        </div>      
      </div>
    </div>

  ) 
}
