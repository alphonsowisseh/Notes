import React, { Component } from 'react'
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
      <div>
        <IndexPage notes={this.state.notes} />
      </div>
    )
  }
}

export default App
