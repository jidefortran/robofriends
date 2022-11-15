import React from "react";
import "./Search.css";


const Searchbox=({searchfield , searchChange})=>{
    return(
<div className="searchMain">
<input type='search'
 placeholder="search robots"
 onChange={searchChange}
 className="search"/>
 
 </div>

        
    )
}

export default Searchbox