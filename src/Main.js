import { useEffect, useState} from "react";

import Navbar from "./Navbar";
import "./main.css";
import "./header.css";


export default function Main() {

  
 
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


  

  return (

<div className="container-fluid">
  <div className="row">
    <div className="col-lg-3 col-sm-12 border border-dark">
      <Navbar />
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
