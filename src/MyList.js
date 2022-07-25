import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {

  render() {
    let todoItems = this.props.theList.map((item, index) => (
      <ListItem task={item} key={index} />
    ))
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    )
    
      //  
       
      //  <input type="text" id="date" date="date" placeholder="enter date">

    // <input type="text" id="name" name="name" placeholder="Type an item here"/>
      
    
    }
    
    
  }

export default MyList