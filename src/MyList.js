import logo from './logo.svg';
import './MyList.css';
import ListItem from './components/ListItem';

const theList = ['update ReadMe', 'homework', 'fold laundry']

const listJSX = theList.map(task =>
  <ListItem task={task} key ={task}/>
)

function MyList() {
  return (
    <div>
      <header>
        <h1> Things I Should Stop Procrastinating:</h1>
      </header>
      <section>
      <ul>
        {listJSX}
      </ul>
      </section>
    </div>
  );
}

export default MyList;
