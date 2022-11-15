import React from "react";
import './Card.css'

const Card=({firstname , lastname , email , id}) =>{
    
    return(
        <div className="robotContainer">

            <img src={`https://robohash.org/${id}text/`} alt="robots"/>
            <div >
                <h2>{firstname}</h2>
                <h3>{lastname}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card