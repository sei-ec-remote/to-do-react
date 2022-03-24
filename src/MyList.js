import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  render () {
  let todoItems = this.props.theList.map((item, index) => {
    return <ListItem task={item} key={index} />
  })
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
        {todoItems}
        </ul>
        <form action="" method="POST" />
               <h4><label class="form-label">Add List Item: </label></h4>
                    <input type="text" class="form-control" name="toDo" placeholder="enter to do list item..." />
                    <input type="submit" class="btn btn-success" value="ADD LIST ITEM" /><br/>
                  <br/><input type="submit" class="btn btn-success" value="FINISHED THE LIST" />
      </div>
    )
  }
}

export default MyList
