
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

export default function Navbar({episodes, fetchEachEpisode}) {

  const [episodesObj, setEpisodesObj] = useState(episodes);
  const [currentPage, setCurrentPage] = useState(1);
  const [episodesPerPage, setEpisodesPerPage] = useState(10);

  //console.log(episodesObj);
  //console.log(episodes);

  const maxIndex = episodes.length - 1
  console.log(maxIndex); // max index = 19

   //GET CURRENT EPISODES
   const indexOfLastEpisode = currentPage * episodesPerPage; // 2 * 10
   const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage; // 20 - 10 = 10
   const currentEpisodes = episodes.slice(indexOfFirstEpisode, indexOfLastEpisode); //splice(10, 20)

  const secondLotOfEpisodesHandeler=()=>{
    if(indexOfLastEpisode >= maxIndex ){
      // console.log("reached max");  
      // fetch("https://rickandmortyapi.com/api/episode?page=2")
      // .then((res)=> res.json())
      // .then((data)=>{
      //   return setEpisodesObj(data.results);
      // })  
    }else{

      return setCurrentPage(currentPage + 1)
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
            <Button onClick={secondLotOfEpisodesHandeler} >Next page</Button>
          </div>         
      </div>
  </div>
  );
}


