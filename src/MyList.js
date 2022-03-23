import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
  let todoItems = this.props.theList.map((item, index) => {
    return <ListItem task={item} key={index} />
    })
    return (
      <div className='center'>
        <h1> Things I should stop procrastinating:</h1>
        <ul className='list'>
          { todoItems }
        </ul>
        <form action="" method="post">
          <input type="text" name="toDos" id="" placeholder='Type an item here' />
          <button type="submit">Add it!</button>
        </form>
        <button type="submit">Finished the list!</button>
      </div>
    )
  }
}

export default MyList