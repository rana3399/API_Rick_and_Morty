import {React, useState} from 'react';
import Button from 'react-bootstrap/esm/Button';

import Charecters from './Charecters';

function Episode( {eachEpisodeInfo} ) {

  const [charecterURLResult, setCharecterURLResult] = useState([])
  console.log(eachEpisodeInfo);  

  async function fetchSelectedEpisodeInfo (){
    if(eachEpisodeInfo){

      const allFetchedResult = [];

      for (let URL of eachEpisodeInfo.characters) {
        const res = await fetch(URL);
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

  
  return (
    <div className='w-200 border border-primary '>

      <h2 className='d-flex m-2 justify-content-center'>Episode - {eachEpisodeInfo.id}</h2>
                  
      <ul className="list-unstyled d-flex m-2 justify-content-center">
        <li className="m-2">{eachEpisodeInfo.name}</li>
        <li className="m-2">{eachEpisodeInfo.air_date}</li>
        <li className="m-2">{eachEpisodeInfo.episode}</li>

      </ul>

    <div className='d-flex m-2 justify-content-center'>
      <Button onClick={fetchSelectedEpisodeInfo}
      > Show char Images 
      </Button>
    </div>
    
    <Charecters charecterURLResult={charecterURLResult} />
  
  </div>
  );
}

export default Episode;
