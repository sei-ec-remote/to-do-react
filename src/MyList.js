import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem'
import { Component } from 'react';
import { render } from '@testing-library/react';


// Class way
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

///Function way
// const toDos =  ['buy chips', 'buy cheese', 'buy jalapenos', 'make nachos']

// const todoItemsJSX = toDos.map(listItem => <ListItem task={listItem} key={listItem}/>)
// function MyList() {
//   return (
//     <div>
//       <h1>Things I should stop procrastinating:</h1>
//       <ul>
//         {todoItemsJSX}
//       </ul>
//    </div>
//   )
// }

export default MyList
