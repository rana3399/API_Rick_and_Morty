import {React, useEffect, useState} from 'react';

import Navbar from "../Navbar";
import Episode from '../Episode';
import Charecters from "../Charecters";
import "./main.css";

export default function Main() {
  const [episodes, setEpisodes] = useState("");
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [episodesPerPage, setEpisodesPerPage] = useState(10);
  const [eachEpisodeInfo, setEachEpisodeInfo] = useState("");

  useEffect(() => {
    const fetchEpisodes = ()=>{
      setLoading(true)
      fetch("https://rickandmortyapi.com/api/episode")
      .then((res)=> res.json())
      .then((data)=>{
        console.log(data.results);
        setEpisodes(data.results);
      });   
    }
    fetchEpisodes()
  }, []);

    //GET CURRENT POSTS
    const indexOfLastEpisode = currentPage * episodesPerPage; // 1 * 10
    const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage; // 10 - 10 = 0
    const currentEpisodes = episodes.slice(indexOfFirstEpisode, indexOfLastEpisode); //splice(0, 10)

  const fetchEachEpisode =(id)=>{ 
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

  return (
    <div className="container-fluid w-100 h-100">
      <div className="row">
        <div className="col-lg-2 col-sm-12 border border-dark">
          <Navbar 
            episodes={currentEpisodes}
            loading={loading}
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
