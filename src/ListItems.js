import React, { Component } from 'react'
import Task from './Task'
import './App.css'

class ListItems extends Component {
    render() {
        console.log( 'props in ListItems', this.props)
        let allTasks = this.props.tasks.map((item, i) => {
            return <Task
                     task={item}
                     key={i}
                    />
        })
        return(
            <>
                <ul>{allTasks}</ul>
            </>
        )
    }
}
export default ListItems