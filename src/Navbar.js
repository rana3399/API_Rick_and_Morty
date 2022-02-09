
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

export default function Navbar({episodes, fetchNextPage , prevLotOrPage,  fetchEachEpisode}) {

  const [currentLot, setCurrentLot] = useState(1);
  
  const episodesPerLot = 10;

  const maxIndex = episodes.length - 1
  console.log(maxIndex); // max index = 19

   //GET CURRENT EPISODES
   const indexOfLastEpisode = currentLot * episodesPerLot; // 2 * 10
   const indexOfFirstEpisode = indexOfLastEpisode - episodesPerLot; // 10 - 10 = 0
   const currentEpisodes = episodes.slice(indexOfFirstEpisode, indexOfLastEpisode); //splice(0, 10) || (10, 20)

  const secondLotOrNextPagesHandeler=()=>{
    if(indexOfLastEpisode >= maxIndex ){
      console.log("next page loading");
      fetchNextPage()
      setCurrentLot(1)   
    }else{
      return setCurrentLot(currentLot + 1)
    }
  }

  const prevLotOrPageHandeler = ()=>{
    //console.log("prev lot or page called");
    if(currentLot >= 2){
      prevLotOrPage()
      setCurrentLot(currentLot - 1) 
    }
  }

  return(
  <div>  
      <div className="button-container">
        {episodes && (
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
            <Button onClick={secondLotOrNextPagesHandeler} >Next page</Button>
          </div>  

          <div className='m-2'>
            <Button onClick = {prevLotOrPageHandeler}> Previous Lot/ page</Button>
          </div>  
    
      </div>
  </div>
  );
}


