import React, { Component } from 'react'
import './App.css'

class AddItem extends Component {
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    New Task:
                    <input type="text" />
                </label>
                <input type="submit" value="Add It" />
            </form>
        )
    }
}

export default AddItem