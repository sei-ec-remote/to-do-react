import React, {Component} from 'react';


class AddForm extends Component {
    render() {
    return (
        <div>
          <form>
            <label for='list-item'>Add to the List!</label><br></br>
            <input type='text' id='list-item' name='list-item'></input><br></br>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
    )
  }
}

export default AddForm;