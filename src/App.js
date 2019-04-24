import React, { Component } from 'react'
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'

import IndexPage from './pages/index'
import ShowPage from './pages/ShowPage'

export class App extends Component {
  state = {
    notes: {
      1: {
        _id: 1,
        title: "Hello, World!",
        body: "This is the body of my note",
        updatedAt: new Date()
        }
      }
    }
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={(props) => <IndexPage {...props} notes={this.state.notes} />} />
        <Route exact path="/notes/:id" component={(props) => <ShowPage {...props} note={this.state.notes[props.match.params.id]} />} />
      </div>
      </Router>
    )
  }
}

export default App
