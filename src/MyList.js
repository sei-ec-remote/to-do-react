import React, { Component } from 'react'
import './MyList.css'
import  './ListItem'
import ListItem from './ListItem'

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

        <div className='add'> 

          <input type="text" placeholder="Type an item here"/>
          <input type="submit" value="Add it!"></input>
        
        </div>
       

        <div className='submit'>

          <input id='input' type="submit" value="Finished the list!"></input>
          
        </div>
        

      </div>
    )
  }
}

export default MyList