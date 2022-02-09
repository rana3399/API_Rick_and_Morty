import {React, useEffect, useState} from 'react';

import Navbar from "../Navbar";
import Episode from '../Episode';
import Charecters from "../Charecters";
import "./main.css";

export default function Main() {
  const [episodes, setEpisodes] = useState([]);
  const [ info, setInfo ] = useState(null)
  
  const [eachEpisodeInfo, setEachEpisodeInfo] = useState("");

  useEffect(() => {
    const fetchEpisodes = ()=>{
      fetch("https://rickandmortyapi.com/api/episode")
      .then((res)=> res.json())
      .then((data)=>{
        console.log(data.results);
        setEpisodes(data.results);
        setInfo(data.info)
      });   
    }
    fetchEpisodes()
  }, []);

  const fetchNextPage = () => {
    // what to do when there are no more next pages. EXERCISE.
    fetch(info.next)
    .then((res)=> res.json())
    .then((data)=> {
      setEpisodes(data.results);
      setInfo(data.info);
    })
  }

  const fetchEachEpisode =(id)=>{ 
    const fetchEachEpisodeResult = episodes.filter((episode)=>{  // filter expects a RETURN? 
      if(episode.id === id){
      fetch(episode.url)
        .then((res)=> res.json())
        .then((data)=>{
          return setEachEpisodeInfo(data);
        })
      }
    })    
    return fetchEachEpisodeResult;
  }

  return (
    <div className="container-fluid w-100 h-100">
      <div className="row">
        <div className="col-lg-2 col-sm-12 border border-dark">
          <Navbar 
            episodes={episodes}
            fetchEachEpisode={fetchEachEpisode}
            fetchNextPage={fetchNextPage}
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
