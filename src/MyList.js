// import React, { Component } from 'react'
import './App.css';
import ListItem from './ListItem'

function MyList() {
  const toDos = [
    "Listen to Hot Mulligan", 
    "Drink hot cocoa", 
    "Eat hot cheetos"
  ]
  return (

    

      <>
      <h1> Things I should stop procrastinating:</h1>
          <ListItem
          toDos={toDos}
          />
      </>
    ) 
    
}

export default MyList;
