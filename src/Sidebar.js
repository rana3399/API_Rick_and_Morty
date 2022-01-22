import { useEffect, useState} from "react";
import Button from "react-bootstrap/esm/Button";

import "./sidebar.css";


export default function Sidebar() {

  const [episodes, setEpisodes] = useState();
  const [pageURL, setPageURL] = useState("https://rickandmortyapi.com/api/episode");
  const [charecterItems, setcharecterItems] = useState("");


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
    .then((res)=> res.json())
    .then((data)=>{
      setcharecterItems(data);
    });  
  }, []);

  //console.log(charecterItems);
  //console.log(episodes);

  useEffect(() => {
    console.log("i am clicek - 1");

    fetch(pageURL)
    .then((res)=> res.json())
    .then((data)=>{
      setEpisodes(data.results);
    });

    console.log("i am clicek - 2");
  
  }, [pageURL]);

  const pagination =()=>{
    if(charecterItems){
      const URL = charecterItems.info.next;
      console.log(URL);
      fetch(URL)
      .then((res)=> res.json())
      .then((data)=>{
        console.log(data.info.next);
        return setPageURL(data.info.next);  
      })
    }
  }

  

  return (

<div className="container-fluid">
  <div className="row">

    <div className="col-lg-3 col-sm-12 border border-dark">
        <div className="button-container border border-primary">
           {episodes && (
              
               episodes.map((episode, id)=>{
                 return <Button key={id} className="d-block m-5"> Episode {episode.id} </Button>})
              )
            }

            <div>
              <Button onClick={()=>{pagination()}} >Next page</Button>
            </div>         
        </div>
      
    </div>
    
    <div className="col-lg-9 col-sm-12 border border-dark">
      2 of 2
      <div className="episodes-container">
        {
          charecterItems.results && (
            charecterItems.results.map((charecter, id)=>{
              return (
                
                <div key={id} className="my-episode">
                
                  <div className="w-300">
                  <img src={charecter.image} style={{width: "100%", height: "120px"}} alt="" />
                  </div>
                  <div >
                  
                    <ul className="list-unstyled w-300 d-flex m-2 justify-content-center my-image-container-list">
                      <li className="m-2">{charecter.name}</li>
                      <li className="m-2">{charecter.status}</li>
                      <li className="m-2">{charecter.gender}</li>
                      <li className="m-2">{charecter.species}</li>
                    </ul>
                  
                  </div>
                  
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
