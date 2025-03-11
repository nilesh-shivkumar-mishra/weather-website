import React, { Component } from 'react'

import Navbar from './extracomponent/Navbar'
import Searchbox from './extracomponent/Searchbox'
import  './App.css'


export default class App extends Component {
  render() {
    return (
      <div >
        <Navbar/>
        <Searchbox/>
      </div>
    )
  }
}
