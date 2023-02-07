import './App.css'
import ListItem from './ListItem'

const MyList = () => {
    let todoItems = this.props.theList.map((item, index) => {
    return <ListItem task={item} key={index} />
    })
    return (
    <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
        {todoItems}
        </ul>
    </div>
    )
  }

export default MyList