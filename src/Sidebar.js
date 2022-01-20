import { useEffect, useState} from "react";
import Button from "react-bootstrap/esm/Button";

import "./sidebar.css";


export default function Sidebar() {

  const [episodes, setEpisodes] = useState();
  const [count, setCount] = useState(1);
  const [pic, setImage] = useState("");

  const [chaId, setChaId] = useState();


  useEffect(() => {

    fetch(`https://rickandmortyapi.com/api/episode?page=${count}`)
    .then((res)=> res.json())
    .then((data)=>{
      setEpisodes(data.results);
    });
  
  }, [count]);

  console.log(episodes);

  // if(episodes){
  //   episodes.map((episode)=>{
  //     return setChaId(episode.id)
  //   })
  // }
  
  // useEffect(() => {

  //   fetch(`https://rickandmortyapi.com/api/character/${chaId}`)
  //   .then((res)=> res.json())
  //   .then((data)=>{
  //     console.log(data.image);
  //     return setImage(data.image);
  //   })

  // }, [chaId]);
  

  return (

<div className="container-fluid">
  <div className="row">

    <div className="col-lg-3 col-sm-12 border border-dark">
        <div className="button-container border border-primary">
           {
             episodes && (
              
               episodes.map((episode, id)=>{
                 return <Button key={id} className="d-block m-5"> Episode {episode.id} </Button>})
              )
           }

            <div>
              <Button onClick={()=>{setCount(count + 1)}} >Next page</Button>
            </div>         
        </div>
      
    </div>
    
    <div className="col-lg-9 col-sm-12 border border-dark">
      2 of 2
      <div className="episodes-container">
        {
          episodes && (
            episodes.map((episode, id)=>{
              return (
                
                <div key={id} className="my-episode">
                
                <img src={pic} className="w-50" alt="char-avatar" />
                  <p>{episode.name}</p>
                  <p>{episode.air_date}</p>
                  <p>{episode.episode}</p>
                  
                </div>

              )})
          )
        }
      </div>       
    </div>
  </div>
</div>

  )
  
}
