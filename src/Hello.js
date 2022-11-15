import React , {Component}from 'react';
import './Hello.css'

const Hello =(props)=> {
    
        return ( 
            <div className='helo'>
           <h1>Hello Jesus</h1>  
           <p>{props.greeting}</p>   
            </div>
        
       
        );
       

    }

export default Hello