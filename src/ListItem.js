import React from 'react'
import './MyList.css'

const ListItem = (props) => {
    return(
        <li>{props.task}!</li>
        )
}


export default ListItem