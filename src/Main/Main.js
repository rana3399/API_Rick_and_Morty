import {React, useEffect, useState} from 'react';

import Navbar from "../Navbar";
import Episode from '../Episode';
import Charecters from "../Charecters";

import "./main.css";

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

    //


  const fetchEachEpisode =(id)=>{   // 
    const fetchEachEpisodeResult = episodes.results.filter((episode)=>{

      if(episode.id === id){
          const episodeURL = episode.url;
      
          const result = fetch(episodeURL)
            .then((res)=> res.json())
            .then((data)=>{
                return setEachEpisodeInfo(data);  
            })
            return result;
        }else{
          return null
      }
    })
      
    return fetchEachEpisodeResult;
  }

  const pagination =()=>{
      if(episodes){
        //console.log(episodes.results.length);
        let pageNum = 1;
        let pageSize = 10;

        if(pageNum < (episodes.results.length / pageSize)){

          const myUrl = `https://rickandmortyapi.com/api/episode?page=${pageNum}`
          fetch(myUrl)
          .then((res)=> res.json())
          .then((data)=>{
            return setEpisodes(data);
          })
  
        }else{

          const URL = episodes.info.next
          fetch(URL)
          .then((res)=> res.json())
          .then((data)=>{
            return setEpisodes(data);
          })
        }
      }
  }

  return (
    <div className="container-fluid w-100 h-100">
      <div className="row">
        <div className="col-lg-2 col-sm-12 border border-dark">
          <Navbar 
            episodes={episodes}
            pagination={pagination}
            fetchEachEpisode={fetchEachEpisode}
          />
        </div>

        <div className="col-lg-10 col-sm-12 border border-dark">
          <Episode
            eachEpisodeInfo={eachEpisodeInfo}          
          />
          <Charecters />
        </div>      
      </div>
    </div>

  ) 
}
