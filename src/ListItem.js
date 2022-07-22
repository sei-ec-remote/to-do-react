import React, { Component } from 'react'
import Item from './Item.js'
import './App.css'

class ListItem extends Component {

    render() {
        let allItems = this.props.toDos.map((item, index) => {
            return <Item toDos={item} key={index}/>
        })
    return(
    <ul>
        {allItems}
    </ul>
    )
  }
}

export default ListItem