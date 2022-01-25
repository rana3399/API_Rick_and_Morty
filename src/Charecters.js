import {React} from 'react';

export default function Charecters({charecterURLResult}) {


  if(charecterURLResult){
    console.log(charecterURLResult);
   }

   return (
     <div>
       {
         charecterURLResult && (
           <div>
             <p>{charecterURLResult.name} </p>
             <div className="w-300">
                <img src={charecterURLResult.image} style={{width: "100%", height: "120px"}} alt="" />
             </div>
           </div>
         )
   
       }
     </div>
   )
}


  

// return (
//   <div>
//     {
//       charecterURLResult && (
//        charecterURLResult.map((char) =>{
//          return (
//            <div>
//              <p>{char.name} </p>
             
//              <div className="w-300">
//                <img src={char.image} style={{width: "100%", height: "120px"}} alt="" />
//              </div>

//            </div>
//          )
//        })
        
//       )

//     }
//   </div>
// )

