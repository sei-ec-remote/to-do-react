import './App.css'
import ListItem from './components/ListItem'

const myList = ['Project 2', 'Homework', "Call Doctor", "Do Taxes"]

const listItemJSX = myList.map(listItem => {
  return <ListItem listItem={listItem} key={listItem} />
})

function App() {
  return (
    <div>
      <h1>Things I should stop procrastinating:</h1>
      <ul>
        {listItemJSX}
      </ul>
    </div>
  )
}

export default App