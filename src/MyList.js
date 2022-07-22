import React, { Component } from "react"
import ListItem from "./ListItem.js"
import "./App.css"

class MyList extends Component {
  render () {
      console.log("these are the props in post", this.props)
      let todoItems = this.props.theList.map((item, index) => {
        return <ListItem task={item} key={index} />
      })
    return (
      <>
        <h1> Things I should stop procrastinating: </h1>
        <ul>
          {todoItems}
        </ul>
      </>
    )
  }
}


export default MyList








// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
