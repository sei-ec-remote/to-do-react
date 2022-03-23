import React, { Component } from 'react'
import './App.css';
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => {
      return<ListItem task={item} key={index}/>
    })
    return(
        <div>
          <h1> Things I should stop Procrastinating</h1>
            <ul>
              {todoItems}
            </ul>
              <form>
                {/* adding items to the list */}
                <label>
                  <input type ='text' name='toDos' placeholder='Add to List'/>
                </label>
                <input type='submit' value='Add to list'/>
              </form>
              {/* finishing the list */}
                <input type='submit' value='Finish the List'/>
        </div>
    )
  }
}

export default MyList;
