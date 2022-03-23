import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem.js'
class MyList extends Component {
   
  render() {
   let todoItems = this.props.theList.map((item, index) => {
    return <ListItem task={item} key={index} />
  })
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <form action="">
          <input type='text' placeholder='Type an item here...'/>
          <input type='submit' value='Add it!'/>
        </form>
        <form action="">
          <input type="submit" value='Finish the list!' />  
        </form>
      </div>
    )
  }
}

export default MyList
