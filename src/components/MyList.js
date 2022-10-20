import React from 'react'
import '../App.css'
import ListItem from './ListItems'

const MyLIst = ({theList}) => {
    let toDoItems = theList.map((item,index) => {
        return <ListItem task={item} key={index}/>
    })
    return(
        <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {toDoItems}
        </ul>
      </div>
    )
}

export default MyLIst