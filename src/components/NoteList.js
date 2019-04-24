import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NoteList extends Component {
    renderNotes(){
        const notes = Object.values(this.props.notes)
        return notes.map((n) => <div><h2><Link to={`/notes/${n._id}`}>{n.title}</Link></h2></div>)
    }
  render() {
    return (
      <div>
        {this.renderNotes()}
      </div>
    )
  }
}

export default NoteList
