import React, { Component } from 'react'

class Task extends Component {
    render () {
        return (
            <li>{this.props.task}</li>
        )
    }
}

export default Task