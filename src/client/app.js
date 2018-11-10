import React, { Component } from 'react'
import { LandingPage, Navbar } from './components/index'


export default class App extends Component {
  render() {
    return <div>
      <Navbar />
      <LandingPage />
    </div>
  }
}
