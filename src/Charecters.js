import {React, useState} from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import Location from './Location';

export default function Charecters({charecterURLResult}) {

  const [locationResult, setLocationResult] = useState();
  const [editIndex, setEditIndex]= useState(null);

  const fetchLocationResult =(id)=>{
    setEditIndex(editIndex => editIndex === id ? null : id)

    const findCharecter = charecterURLResult.filter((char) => {
      return char.id === id
    });

    const locationURL = findCharecter[0].location.url;
    fetch(locationURL)
    .then((res)=> res.json())
    .then((data) =>{
      return setLocationResult(data);
    })  
  }
console.log(locationResult);
   return (
    <div className='d-flex m-2 justify-content-center' 
    style={{width: "100%",  alignItems: "center" , flexWrap: "wrap"}}>
       { 
         charecterURLResult && (
          charecterURLResult.map((charResult , index)=>{           
            return (
            <>
              <Card className='m-2 p-2 text-center' style={{ width: '20rem' }}>
                <Card.Img 
                variant="top" 
                style={{width: "100%", height: "120px"}} 
                src={charResult.image} 
                />
                <Card.Body>
                  <Card.Title>{charResult.name}</Card.Title>
                  <Card.Body className='my-card'>

                    <Card.Text className='mx-2'>
                    {charResult.status}
                    </Card.Text>
                    <Card.Text className='mx-2'>
                    {charResult.species}
                    </Card.Text>
                    <Card.Text className='mx-5'>
                    {charResult.gender}
                    </Card.Text>

                  </Card.Body>
                   <Button onClick={()=>{fetchLocationResult(charResult.id)}} variant="primary">Show Location info</Button> 
                </Card.Body>
                
              {locationResult && editIndex === charResult.id && (              
                <Location locationResult={locationResult} />
                )}

              </Card>
            </>
              )
          }
          )
         )
       }
    </div>
   )
}

