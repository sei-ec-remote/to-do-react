import React, { Component } from 'react'
import './App.css'

class ListItem extends Component
{
    render()
    {
        // console.log(this.listItemsJsx)
        return(
            <li>{this.props.item}</li>
        )
    }
}

export default ListItem