import './ListItem.css'

const ListItem = ({ task, id }) => {
    return <li key={id}>{task}</li>
}

export default ListItem
