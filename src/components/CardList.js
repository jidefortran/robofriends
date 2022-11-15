import React from "react";
import  Card from "./Card.js"

const CardList =({robots})=>{
  
       
    
    return (
        <div className='mainContiner'>
        {
            robots.map((user, i) => {
                return(
            <Card 
        key = {i} 
        id={robots[i].id } 
        firstname = {robots[i].first_name}
        lastname = {robots[i].last_name} 
        email = {robots[i].email}/>
                )
   })      
        }


     </div>

    )
}

export default CardList