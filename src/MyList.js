import React, {Component} from 'react';
import ListItem from './ListItem';
import './App.css';
import AddForm from './AddForm';

class MyList extends Component {
    render() {
      let toDoItems = this.props.theList.map((item,index) => {
        return <ListItem doThis={item} key={index} />
      })
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {toDoItems}
        </ul>
        <AddForm />
      </div>
    )
  }
}

export default MyList;
