import React from "react";
const Scroll= (props)=>{
    return  (
        
        <div style={{overflowY: 'scroll', border: '1px solid black', height:'px'}}>
            {props.children}
        </div>
    )



}


export default Scroll