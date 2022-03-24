// bring in React and Component instances from React 

import React, { Component } from 'react'

// define our component 

class ListItem extends Component {
  render() {
    return (
      <div>
        <li>{this.props.task}</li>
      </div>
    )
  }
}

// export our component

export default ListItem