import React from "react"

const ListItem = ({listItem}) => {
    return (
        <li key={listItem}>{listItem}!!!</li>
    )
}
export default ListItem