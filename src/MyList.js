import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'
import AddItem from './AddItem'
import FinishList from './FinishList'

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
        <AddItem />
        <FinishList />
      </div>
    )
  }
}

export default MyList