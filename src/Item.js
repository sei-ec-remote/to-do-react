import React, { Component } from 'react'

class Item extends Component {
    render () {
        console.log(this.props)
        return (
            <li>
                {this.props.toDos}
            </li>
        )
    }
}

export default Item