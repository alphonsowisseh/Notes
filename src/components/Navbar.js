import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
      <Link to="/">React Notes</Link>
      <div className="navbar-buttons">
      <Link to="/new" className="btn">New Note</Link>
      </div>
      </nav>
    )
  }
}

export default Navbar
