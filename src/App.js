import './App.css';
import ListItem from './components/ListItem'

const toDoItems = [
  'Buy pasta',
  'Buy mushroom',
  'Buy green pepper'
]

function MyList() {
  return (
    <div>
      <h1> To do list:</h1>
        <ul>
          {toDoItems.map(item => {
            return (
            <ListItem task={item}/>
            )
          })}
        </ul>
    </div>
  );
}

export default MyList;
