import React, { Component } from 'react'
import './MyList.css'
import ListItem from './Components/listItem'

class MyList extends Component {
  render() {
    let toDos = this.props.myList.map(( item, index ) => {
      return <ListItem task={item} key={index}/>
    })
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {toDos}
        </ul>
      </div>
    )
  }
}

export default MyList
