import React, { Component } from 'react'
import './App.css'

class ListItem extends Component
{
    render()
    {
        return(
            <li>{this.props.item}</li>
        )
    }
}

export default ListItem