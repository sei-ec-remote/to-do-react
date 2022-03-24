import React, { Component } from "react"
import "./App.css"
import ListItem from "./ListItem"

class MyList extends Component {
  todoItems = this.props.theList.map((item, index) => {
    return <ListItem task={item} key={index} />
  })

  render () {
    return (
      <div>
        <h1>Things To-Do Tonight:</h1>
        <ul>
          {this.todoItems}
        </ul><br />

        <form>
          <label for="task">Add a new to-do:</label><br />
          <input type="text" id="task" name="task" /><br />
          <input class="add-new-button" type="submit" value="Add the thing" />
        </form>
      </div>
    )
  }
}

export default MyList;
