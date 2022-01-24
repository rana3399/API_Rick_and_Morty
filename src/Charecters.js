import {React} from 'react';

export default function Charecters({charecterURLResult}) {

   //const [charecterURLResult, setCharecterURLResult] = useState("")

  if(charecterURLResult){
    return console.log(charecterURLResult);
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


  

