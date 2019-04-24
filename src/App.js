import React, { Component } from 'react'
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/index'

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
        <Route exact path="/" component={(props) => <IndexPage {...props} notes={this.state.notes} />} />
      </div>
      </Router>
    )
  }
}

export default App
