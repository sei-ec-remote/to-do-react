import './App.css';
import { Component } from 'react';
import ListItem from './ListItem';



class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => {
      return <ListItem task={item} key={index} />
    })
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <form>
  <label>
    <input type="text" name="toDos" placeholder='Type an item here' />
  </label>
  <input type="submit" value="Add Item!" />
</form>
      <form>
        <input type="submit" value="Finished the list!"/>
      </form>
      </div>
    )
  }
}

export default MyList;
