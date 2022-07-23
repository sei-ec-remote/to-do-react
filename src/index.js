import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';
import reportWebVitals from './reportWebVitals';


const theList = ["Listen to Hot Mulligan", "Drink hot cocoa", "Eat hot cheetos"]

ReactDOM.render(
  <React.StrictMode>
     <MyList
        theList={theList}
      />
  </React.StrictMode>,
  document.getElementById('root')
);