import React, { Component } from 'react'
import ListItem from './ListItem'
import './MyList.css'

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => {
      return <ListItem task={item} key={index}/>
    })
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <form>
        <input type="text" placeholder='hmm type here bozo...'></input>
        <input type="submit" value="Add it!"></input>
        </form>
        <form>
          <input type="submit" value="Finished the list!"></input>
        </form>
      </div>
    )
  }
}

export default MyList