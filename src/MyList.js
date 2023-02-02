import { useState } from 'react'
import ListItem from './components/ListItem'
import './App.css'

const MyList = ({ todos }) => {
    const [list, setList] = useState(todos)
    const [name, setName] = useState('')

    const handleChange = e => {
        setName(e.target.value)
    }

    const handleAdd = () => {
        console.log(list)
        const newList = list.concat(name)
        setList(newList)
        console.log(typeof newList)
        setName('')
    }

    return (
        <div>
            <h1>Thing I should stop procrastinating:</h1>
            <ul>
                {list.map((task, index) => {
                    return (
                        <ListItem
                            task={task}
                            id={index}
                        />
                    )
                })}
            </ul>
            <div>
                <input
                    type='text'
                    value={name}
                    onChange={handleChange}
                />
                <button
                    type='button'
                    onClick={handleAdd}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default MyList
