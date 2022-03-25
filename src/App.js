import './App.css';
import MyList from './MyList'
import Index from './Index'

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <MyList />
      <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
 
    </div>
  );
}

export default App;