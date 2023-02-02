import ListItem from './components/ListItem'
import './App.css'

const MyList = ({ todos }) => {
    const todoItems = todos.map(task => {
        return <ListItem task={task} />
    })

    return (
        <div>
            <h1>Thing I should stop procrastinating:</h1>
            <ul>{todoItems}</ul>
        </div>
    )
}

export default MyList
