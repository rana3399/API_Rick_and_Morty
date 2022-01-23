import Button from 'react-bootstrap/esm/Button';

export default function Navbar({episodes, pagination, fetchEachEpisode}) {

  return(
  <div>  
      <div className="button-container border border-primary">
        {episodes && (            
          episodes.results.map((episode, index)=>{
            return (
              <Button
                // href={eachEpisodeInfo.url}
                key={index + 1} 
                className="d-block m-5"
                onClick={()=>{fetchEachEpisode(episode.id)}}
                
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
