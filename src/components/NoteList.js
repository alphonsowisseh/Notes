import React, { Component } from 'react'

export class NoteList extends Component {
    renderNotes(){
        const notes = Object.values(this.props.notes)
        return notes.map((n) => <div><h2>{n.title}</h2></div>)
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
