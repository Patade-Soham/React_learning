import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div>
        <ul>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/about">Abour</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
