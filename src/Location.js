import React from 'react';

export default function Location({ locationResult }) {

  
    console.log(locationResult);
  
    //receive a prop from Charecter.js and show location info.
  return (
    <>  
        <div>
          <ul>
            <li>{locationResult.name} </li>
            <li>{locationResult.dimension}</li>
          </ul>
        </div>
    </>
  )
  
  ;
}
