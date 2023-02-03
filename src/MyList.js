import { useState } from 'react'
import ListItem from './components/ListItem'
import './MyList.css'

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
        <div className='my-list'>
            <h1 className='my-list__title'>
                Things I should stop procrastinating:
            </h1>
            <ul className='my-list__list'>
                {list.map((task, index) => {
                    return (
                        <ListItem
                            task={task}
                            id={index}
                        />
                    )
                })}
            </ul>
            <div className='my-list__form'>
                <input
                    className='my-list__input'
                    type='text'
                    value={name}
                    onChange={handleChange}
                />
                <button
                    className='my-list__btn'
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
