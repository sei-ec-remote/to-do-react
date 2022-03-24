import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {
  render() {

    let todoItems = this.props.theList.map((item, index) => {
      return <ListItem task={item} key={index} />
    })

    return (
      <div class="toDo">
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>

    <form> 
      <input type="text" name="toDos" placeholder='Type an item here' />
      <input type="submit" value="Add it!" />
    </form>
      <form>
        <input type="submit" value="Finished the list!"/>
      </form>
      </div>
    )
  }
}

export default MyList;
