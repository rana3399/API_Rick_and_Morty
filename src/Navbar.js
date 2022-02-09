
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

export default function Navbar({episodes, fetchEachEpisode, fetchNextPage}) {
  const [currentLot, setCurrentLot] = useState(1);
  const episodesPerLot = 10

  const maxIndex = episodes.length - 1
  console.log(maxIndex); // max index = 19

   //GET CURRENT EPISODES
   const indexOfLastEpisode = currentLot * episodesPerLot; // 2 * 10
   const indexOfFirstEpisode = indexOfLastEpisode - episodesPerLot; // 20 - 10 = 10
   const currentEpisodes = episodes.slice(indexOfFirstEpisode, indexOfLastEpisode); //splice(10, 20)

  const secondLotOfEpisodesHandler = () => {
    if(indexOfLastEpisode >= maxIndex ){
      fetchNextPage()
      setCurrentLot(1)
    }else{
      setCurrentLot(currentLot + 1)
    }
  }

  return(
  <div>  
      <div className="button-container">
        {currentEpisodes && (
          currentEpisodes.map((episode, index) =>{
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
            <Button onClick={secondLotOfEpisodesHandler} >Next page</Button>
          </div>         
      </div>
  </div>
  );
}
