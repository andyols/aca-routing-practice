import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => (
  <div className="header">
    <ul>
      <li>
        <Link to="/">Landing</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/mywork">My Work</Link>
      </li>
    </ul>
  </div>
)

export default Header
