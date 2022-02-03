import React from 'react';

export default function Location({ locationResult }) {
    //receive a prop from Charecter.js and show location info.
  return (
    <>  
        <div className='d-flex m-2 justify-content-start'>
          <ul>
            <li >Name: {locationResult.name} </li>
            <li>Type: {locationResult.type}</li>
            <li>Dimension: {locationResult.dimension}</li>
            <li>Total residents: {locationResult.residents.length}</li>
          </ul>
        </div>
    </>
  )
  
  ;
}
