import React, { Component } from 'react'
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'

import IndexPage from './pages/index'
import ShowPage from './pages/ShowPage'
import NewPage from './pages/NewPage'

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

    handleSave = (note) => {
      const ids = Object.keys(this.state.notes)
      const id = Math.max(...ids) + 1

      note['_id'] = id

      const { notes } = this.state

      this.setState({
        notes:{
          ...notes,
          [id]: note
        }
      })
      return id
    }
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <div className="app-content">
        <Route exact path="/" component={(props) => <IndexPage {...props} notes={this.state.notes} />} />
        <Route exact path="/notes/:id" component={(props) => <ShowPage {...props} note={this.state.notes[props.match.params.id]} />} />
        <Route exact path="/new" component={(props) => <NewPage {...props} onSave={this.handleSave} /> } />
        </div>
      </div>
      </Router>
    )
  }
}

export default App
