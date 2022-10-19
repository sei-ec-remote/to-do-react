import React, { Component } from 'react'
import '../App.css'

class ListItem extends Component {
  render() {
    return(<li>{this.props.todo}</li>)
  }
}

export default ListItem