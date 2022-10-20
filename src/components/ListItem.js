import React from 'react'
import MyList from '../MyList'


const ListItem = ({listItem: {listItem }}) => {
    return (
        <div>
            <li>{listItem}</li>
        </div>
    )
}

export default ListItem