
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

export default function Navbar({episodes, loading, fetchEachEpisode, secondLotOfEpisodes}) {

  const [secondtLots, setSecondLots] = useState([]);

  const secondLotOfEpisodesHandeler=()=>{
    return  setSecondLots(secondLotOfEpisodes) 
  }

  return(
  <div>  
      <div className="button-container">
        {secondtLots ? (
          secondtLots.map((episode, index) =>{
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
              
        ) : (
          episodes.map((episode, index) =>{
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
            <Button onClick={secondLotOfEpisodesHandeler} >Next page</Button>
          </div>         
      </div>
  </div>
  );
}
