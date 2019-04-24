import React, { Component } from 'react'
import NoteList from '../components/NoteList'

export class IndexPage extends Component {
  render() {
    return (
      <div>
        <h1>Notes</h1>
        <NoteList notes={this.props.notes} />
      </div>
    )
  }
}

export default IndexPage
