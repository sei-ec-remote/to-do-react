import React, { Component } from 'react'
import './App.css'
import ListItem from './components/ListItem'

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
        <div>
        <input
        type="text"
        placeholder="Type an item here" />
        <button>Add it!</button>
        </div>
        <button className='button'>Finished the list!</button>
      </div>
    )
  }
}

export default MyList