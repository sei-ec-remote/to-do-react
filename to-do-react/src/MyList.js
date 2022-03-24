import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    let list = this.props.theList.map((item, index) => {
      return <ListItem task={item} key={index} />
    })
    return (
      <>
      <h1> Things I Should stop procrastinating:</h1>
        <ul>
          {list}
          <form>
              <input type="text" name="toDo" placeholder='Type an item here'/>
              <input type="submit" value="Finished the list!"/>
          </form>
        </ul>      
      </>
    )
  }
}

export default MyList

