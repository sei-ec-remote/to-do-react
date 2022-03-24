// bring in React and Component instances from React 

import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

// define our component 

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
          <form> 
            <input type="text" />
            <input type="submit" value="Add it!" />
            <input type="submit" value="Finished the list!"/>
          </form>
      </div>
    )
  }
}

// export our component

export default MyList
