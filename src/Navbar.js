import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

export default function Navbar({episodes, loading, fetchEachEpisode}) {

  console.log(episodes);

  // const pagination =()=>{
  //  
  // }

  return(
  <div>  
      <div className="button-container">
        {episodes && (            
          episodes.map((episode, index)=>{
            return (
              <>
              <Button
                key={index + 1}
                className="d-block m-5"
                onClick={()=>{fetchEachEpisode(episode.id)}}
                
                >Episode {episode.id}
        
              </Button>
              </>
            )                
          })
        )
        }
        
          <div>
            <Button >Next page</Button>
          </div>         
      </div>
  </div>
  );
}
