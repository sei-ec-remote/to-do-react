import ListItems from './ListItems';
import './App.css';

function MyList() {
  const tasks =[
    "Go grocery shopping",
    "Do the laundry",
    "Clean the hot tub"
  ]
  return (
    <div className="App">
      <h1> Things I should stop procrastinating</h1>
        <ListItems tasks={tasks}/>
    </div>
  )
}

export default MyList
