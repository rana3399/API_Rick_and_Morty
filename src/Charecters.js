import {React} from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';

export default function Charecters({charecterURLResult}) {


  if(charecterURLResult){
    console.log(charecterURLResult);
   }

   return (
     <div className='my-card'>
       { 
         charecterURLResult && (
          charecterURLResult.map((charResult)=>{
            
          return (
            <Card className='m-2 p-2 text-center' style={{ width: '15rem', maxHeight: "420px" }}>
              <Card.Img variant="top" style={{width: "100%", height: "120px"}} src={charResult.image} />
                <Card.Body>
                  <Card.Title>{charResult.name}</Card.Title>
                  <Card.Body className='my-card'>

                  <Card.Text className='mx-2'>
                  {charResult.status}
                  </Card.Text>
                  <Card.Text className='mx-2'>
                  {charResult.species}
                  </Card.Text>
                  <Card.Text className='mx-2'>
                  {charResult.gender}
                  </Card.Text>
                  </Card.Body>
              
                  <Button variant="primary">Show Location info</Button>
                </Card.Body>
            </Card>
            )
          })
         )
   
       }
     </div>
   )
}

