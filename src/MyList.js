import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'
import Index from './index'

class MyList extends Component {
  render() {
    let foodItems = this.props.grocery.map((foodItem, index) => {
      return <ListItem task={foodItem} key={index} />
    })

    return(<div>
      <h1>Grocery List</h1>
      <ul>
        {foodItems}
      </ul>
      <div>
        <input className='input' type='text' placeholder='Add a food item'></input>
        <input className='button' type='submit' value='Add it!'></input>
      </div>
      <br></br>
      <input className='finished' type='button' value='Done with the list'></input>
    </div>)
  }
}

export default MyList
