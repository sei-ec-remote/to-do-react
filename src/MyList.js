import React, { Component } from "react";
import "./MyList.css";

import ListItem from "./components/ListItem";

const toDo = [
  "mail timm some donuts",
  "don't fail my GA homework",
  "deploy my project",
  "prepare for my interview tomorrow",
  "try to get enough sleep",
  "hug my fiancee"
];

class MyList extends Component {
  render() {
    const listItems = toDo.map((item, i) => {
      return <ListItem key={i} task={item} />;
    })
    return (
      <div>
        <h1>My To-Do List</h1>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default MyList;