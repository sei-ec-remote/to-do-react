import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItems.js';


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
          <label>
            Add to do:
            <input type="text" name="todoItems" />
          </label>
          <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

export default MyList