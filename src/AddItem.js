import React, { Component } from 'react'
import './App.css'

class AddItem extends Component {
    render() {
        return (
        <>
        <form action="/" method="POST">    
            <input type="text" placeholder="Add item here"></input>
            <input type="submit" value="Add it"></input>
        </form>
        </>
        )
    }
}

export default AddItem