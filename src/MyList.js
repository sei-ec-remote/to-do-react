import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => {
      return <ListItem task={item} key={index} />
    })
    
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <form>
          <input 
          type="text" 
          name="ListItem" 
          placeholder="Type an Item Here">
          </input>
        </form>
        <button class="add" type="button"> Add it!</button>
        <button class="finished" type="button"> Finished the List!</button>
      </div>
    )
  }
}

export default MyList
