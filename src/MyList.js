import React, { Component } from 'react'
import ListItem from './ListItem'
import './App.css'

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
        <input
            type="text"
            placeholder='Type an item here'
         />
         <button>Add it !</button>
        <div>
          <button>
            Finished the list!
          </button>
        </div>
      </div>
    )
  }
}

export default MyList
