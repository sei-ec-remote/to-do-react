import React, { Component } from 'react'
import './App.css'

class FinishList extends Component {
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Finished the List!" />
            </form>
        )
    }
}

export default FinishList