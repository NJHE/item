import React, { Component } from 'react'
import './index.scss'
import Nav from './Nav'
import { Route } from 'react-router-dom'
import Hot from './Hot';
import Comming from './Comming';
export default class Movies extends Component {


  render() {
    return (
      <div className = "container">
       
        <Nav/>
      
       
        <Route path = "/movies/hot" component = { Hot } />
        <Route path = "/movies/comming"  component = { Comming } />
      </div>
    )
  }
}
