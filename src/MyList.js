import React, { Component } from 'react'
import './App.css'
import ListItem from './component/ListItem'

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
        <input class="newItem" type="searchbar" placeholder="Type an Item Here"></input>
        <input class="newItem" type="button" value="Add it!"></input><br></br>
        <input class="newItem" type="button" value="Finished the list!"></input>
      </div>
    )
  }
}

export default MyList