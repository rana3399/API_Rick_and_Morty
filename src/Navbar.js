import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

export default function Navbar({episodes, pagination, fetchEachEpisode}) {

  const [episodeLimit, setEpisodeLimit] = useState("");

  useEffect(() => {
    if(episodes){
      const size = 10;
      const limitResult = episodes.results.slice(0, size);
      return setEpisodeLimit(limitResult);
    }
    
  }, [episodes]);
  

  console.log(episodeLimit);

  return(
  <div>  
      <div className="button-container">
        {episodeLimit && (            
          episodeLimit.map((episode, index)=>{
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
            <Button onClick={pagination} >Next page</Button>
          </div>         
      </div>
  </div>
  );
}
