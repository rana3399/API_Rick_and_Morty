import {React, useState} from 'react';
import Button from 'react-bootstrap/esm/Button';

import Charecters from './Charecters';

function Episode( {eachEpisodeInfo} ) {

  const [charecterURLResult, setCharecterURLResult] = useState([])
  console.log(eachEpisodeInfo);  

 async function callback (){
    if(eachEpisodeInfo){

      const allFetchedResult = [];

      // eachEpisodeInfo.characters.map(async (char) =>{
        for (let char of eachEpisodeInfo.characters) {
    
          const res = await fetch(char);
  
          //fetch(char).then(res => res.json())
          const data = res.json();  // promise 
          console.log(data);
  
          allFetchedResult.push(data);
       }
        
      

      const charecterDatas = await Promise.all(allFetchedResult)
      console.log(charecterDatas);
      console.log("hi");
      return setCharecterURLResult(charecterDatas)
      
    }

  }

  function findUrl (){
  return callback()
  }

  
  return (
    <div className='w-200 border border-primary'>

      <h2 className='d-flex m-2 justify-content-center my-image-container-list'>Episode - {eachEpisodeInfo.id}</h2>
                  
      <ul className="list-unstyled d-flex m-2 justify-content-center my-image-container-list">
        <li className="m-2">{eachEpisodeInfo.name}</li>
        <li className="m-2">{eachEpisodeInfo.air_date}</li>
        <li className="m-2">{eachEpisodeInfo.episode}</li>

      </ul>

    <Button onClick={findUrl} > Show char Images/info of relevent Episode </Button>
    
    <Charecters charecterURLResult={charecterURLResult} />
    
    {/* fetch charecters info here and show charImages of relevent Episode */}
  
  </div>
  );
}

export default Episode;
