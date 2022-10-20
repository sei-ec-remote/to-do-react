import logo from './logo.svg'
import './App.css'
import React from 'react'
import ListItem from './ListItem'


const theList = ['Listen to Hot Mulligan', 'Drink hot cocoa', 'Eat hot cheetos']

const ListItemJSX = theList.map(x => {
return <ListItem x= {x} key={x}/>
})
 
function App(){
return (
    <div>
    <h1> Things I should stop procrastinating:</h1>
    <ul>
      <li>{ListItemJSX}</li>
    </ul>
  </div>
  )
}

export default App
