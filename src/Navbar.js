import {React, useEffect, useState} from 'react';
import Button from 'react-bootstrap/esm/Button';

export default function Navbar() {

    const [episodes, setEpisodes] = useState("");
    const [eachEpisodeInfo, setEachEpisodeInfo] = useState("");

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/episode")
        .then((res)=> res.json())
        .then((data)=>{
          setEpisodes(data);
        });

      }, []);

      //console.log(episodes);

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
    console.log(eachEpisodeInfo.url);

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

  return(
  <div>  
        <div className="button-container border border-primary">
           {episodes && (            
               episodes.results.map((episode, id)=>{
                 return (
                    <Button
                    // href={eachEpisodeInfo.url}
                    key={id} 
                    className="d-block m-5"
                    onClick={()=>{fetchEachEpisode(id)}}
                    
                    >Episode {episode.id}
            
                    </Button>
                 )                
                 })
              )
            }
            <div>
              <Button onClick={()=>{pagination()}} >Next page</Button>
            </div>         
        </div>
  </div>
  );
}
