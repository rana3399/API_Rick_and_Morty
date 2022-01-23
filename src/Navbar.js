import {React, useEffect, useState} from 'react';
import Button from 'react-bootstrap/esm/Button';

export default function Navbar({episodes, pagination, fetchEachEpisode}) {

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
