import React, { Component } from 'react'
import './App.css'

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
        
      </div>
    )
  }
}

export default App
