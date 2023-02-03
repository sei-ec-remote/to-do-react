import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';



const toDos = ["Practice Js", "Finish code projects", "Design webpages"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)