import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import Searchbox from "../components/SearchBox";
import  './App.css'
import Scroll from "../components/Scroll.js"


 class  App   extends Component {
    constructor (){
        super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }
    onSearchChange = (event)=>{
        this.setState({searchfield:event.target.value})
    
      

       
    }
    render()  {

        const filteredRobots= this.state.robots.filter(robot =>{
            return robot.first_name.toLowerCase().includes(this.state.searchfield.toLowerCase())
           
        })
    return(
        <div >
<h1 className="logo">Robo Friends</h1>
<Searchbox searchChange={this.onSearchChange} />
<Scroll >
<CardList robots={filteredRobots}/>
</Scroll>

        </div>
        
    )
    }
 }
 export default App