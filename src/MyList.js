import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => {
    return < ListItem task={item} key={index} />
  })
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {/* < ListItem task="Buy ice cream" /> */}
          {todoItems}
        </ul>
      <form>
        <input type="text" name="toDos" placeholder='Type a to do' />
        <input type="submit" value="submit" />
      </form>

      </div>
    )
  }
}

export default MyList
