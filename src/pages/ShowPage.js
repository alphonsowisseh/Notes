import React, { Component } from 'react'

export class ShowPage extends Component {
  render() {
      const { note } = this.props

      if(!note){
          return null
      }
      
    return (
      <div>
        <h1>{ note.title }</h1>
        <p>{ note.body }</p>
      </div>
    )
  }
}

export default ShowPage
