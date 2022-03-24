import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
  let allTasks = this.props.theList.map((item, i) =>{
    return <ListItem tasks = {item} key = {i}/>
})
    return (
    <div>
      <h1> Things I should stop procrastinating:</h1>
      <ul>
        {allTasks}
      </ul>
    </div>
    
    )
  }
}

export default MyList
