import React from "react";


 export function Filter({findContact}) {
   return (
   <>        
    <label >Find contacts by name
        <input onChange={(e)=>{findContact(e.target.value.trim())}}></input>
    </label>
    </>
   )
    
 }