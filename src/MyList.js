import React, { Component } from 'react'
import ListItem from './ListItem'
import './App.css'

class MyList extends Component 
{
  render()
  {
    const theList = ['Buy ice cream', 'Do deliverable', 'Have dinner', 'Sleep', 'Repeat']
    const todoItems = theList.map( (item, index) => {
        return <ListItem item={item} key={index}/>
    })

    return (
      <div className="MyList">
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    )
  }
}

export default MyList
