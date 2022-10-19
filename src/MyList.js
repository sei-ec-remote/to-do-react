import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'


// let newArray = oldArray.map((item, index) => {
//   /* how to change each item in the array */
// })

// const phrases = ['ice cream', 'dinosaurs', 'hobbits']
// let excitedPhrases = phrases.map( (phrase, index) => {
//   return newPhrase = phrase + '!'
// })
// excitedPhrases is ["ice cream!", "dinosaurs!", "hobbits!"]

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => {
      return <ListItem task={item} key={index} />
    })
    
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    )
  }
}

export default MyList