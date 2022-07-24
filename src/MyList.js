import logo from './logo.svg';
import ListItem from './ListItem'
import React, {Component}  from 'react'
import './App.css';

export default class MyList extends Component {
  render() {
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          <ListItem />
        </ul>
      </div>
    )
  }
  
  
}

// export default MyList;
