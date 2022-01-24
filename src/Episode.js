import {React, useState} from 'react';
import Button from 'react-bootstrap/esm/Button';

import Charecters from './Charecters';

function Episode({episodes, eachEpisodeInfo}) {

  const [charecterURLResult, setCharecterURLResult] = useState("")


    const findUrl = ()=>{
      if(eachEpisodeInfo){

        console.log(eachEpisodeInfo.characters);
        const URL =  eachEpisodeInfo.characters.map((char)=>{

          fetch(char)
          .then((res)=> res.json())
          .then((data)=>{
            console.log(data);
            return setCharecterURLResult(data);
          });

          return URL;
          
        })
      }
    }

console.log(charecterURLResult);  

  
    return (
      <div className='w-200 border border-primary'>
  
      <h2 className='d-flex m-2 justify-content-center my-image-container-list'>Episode - {eachEpisodeInfo.id}</h2>
                    
      <ul className="list-unstyled d-flex m-2 justify-content-center my-image-container-list">
        <li className="m-2">{eachEpisodeInfo.name}</li>
        <li className="m-2">{eachEpisodeInfo.air_date}</li>
        <li className="m-2">{eachEpisodeInfo.episode}</li>
      </ul>

      <Button onClick={()=>{findUrl()}} > fetch charecters info here and show charImages of relevent Episode </Button>
      
      <Charecters charecterURLResult={charecterURLResult} />
      
      {/* fetch charecters info here and show charImages of relevent Episode */}
    
    </div>
    );
}

export default Episode;
