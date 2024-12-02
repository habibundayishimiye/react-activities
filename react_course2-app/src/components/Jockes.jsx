import React from "react";
export default function Jockes(props){
    return(
     <div>
        <h3>{props.setup}</h3>
       <p>{props.punchline}</p>
     </div>
    );
}