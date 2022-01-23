import React from 'react';

function Episode({eachEpisodeInfo}) {
    console.log(eachEpisodeInfo);

  return (
    <div className='w-200 border border-primary'>

    <h2 className='d-flex m-2 justify-content-center my-image-container-list'>Episode - {eachEpisodeInfo.id}</h2>
                  
    <ul className="list-unstyled d-flex m-2 justify-content-center my-image-container-list">
      <li className="m-2">{eachEpisodeInfo.name}</li>
      <li className="m-2">{eachEpisodeInfo.air_date}</li>
      <li className="m-2">{eachEpisodeInfo.episode}</li>
     
    </ul>
  
  </div>
  );
}

export default Episode;
