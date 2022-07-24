import React, { Component } from 'react'

export default class ListItems extends Component {
     render()  {
          return (
               <li>{this.props.task}!</li>
          )
     }
}