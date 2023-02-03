import './ListItem.css'

const ListItem = ({ task, id }) => {
    return (
        <li
            key={id}
            className='my-list__task'
        >
            {task}
        </li>
    )
}

export default ListItem
