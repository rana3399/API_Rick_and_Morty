import React from 'react';
import { useEffect, useState} from "react";

export default function Charecters() {
    const [charecterItems, setcharecterItems] = useState("");

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character`)
        .then((res)=> res.json())
        .then((data)=>{
          setcharecterItems(data);
        });  
    }, []);

  return (
    <div>
        <div className="episodes-container">
        {charecterItems.results && (
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
  );
}
