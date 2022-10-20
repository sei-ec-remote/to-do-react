import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem'

const toDos = [
   'Listen to Hot Mulligan', 'Drink hot cocoa', 'Eat hot cheetos'
]

const listItemJSX = toDos.map(listItem => <ListItem listItem={listItem} key={listItem} />)


function MyList() {
  return (
        <div>
            <h1>Things I should stop procrastinating:</h1>
            <ul>
                {listItemJSX} 
            </ul>
        </div>
  
  );
}



export default MyList
