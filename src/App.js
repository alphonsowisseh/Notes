import React, { Component } from 'react'
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'

import IndexPage from './pages/index'
import ShowPage from './pages/ShowPage'
import NewPage from './pages/NewPage'
import EditNotePage from './pages/EditNotePage'

import DB from './db'

export class App extends Component {
  state = {
    db: new DB('react-notes'),
    notes: {},
    loading: true
    }

    async componentDidMount() {
      const notes = await this.state.db.getAllNotes();

      this.setState({
        notes,
        loading: false
      })
    }

    handleSave = async (note) => {
      let { id } = await this.state.db.createNote(note)

      const { notes } = this.state

      this.setState({
        notes:{
          ...notes,
          [id]: note
        }
      })
      return id
    }


  async handleDelete(id) {
    let { notes } = this.state;
    let note = notes[id];

    if (notes[id] && window.confirm("Are you sure you want to delete this note?")) {
      await this.state.db.deleteNote(note);

      delete notes[id];
      
      this.setState({ notes });
    }
  }

    renderContent(){
      if(this.state.loading){
        return <h2>Loading...</h2>
      }
    
      return (
        <div className="app-content">
        <Route exact path="/" component={(props) => <IndexPage {...props} notes={this.state.notes}/>} />
        <Route exact path="/notes/:id" component={(props) => (
          <ShowPage {...props} note={this.state.notes[props.match.params.id]} onDelete={(id) => this.handleDelete(id) }/>
          ) } />
        <Route path="/notes/:id/edit" component={(props) => (
          <EditNotePage {...props} note={this.state.notes[props.match.params.id]} onSave={(note) => this.handleSave(note, 'updateNote') }/>
          ) } />
        <Route path="/new" component={(props) => (
          <NewPage {...props} onSave={(note) => this.handleSave(note, 'createNote')} />
        )} />
      </div>
      )
    }
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        { this.renderContent() }
      </div>
      </Router>
    )
  }
}

export default App
