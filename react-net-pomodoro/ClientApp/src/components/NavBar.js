import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props =>{
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/show">
            <i className="material-icons">list</i>
          </Link>
        </li>
        <li><i className="material-icons">assessment</i></li>
        <li className="logo">
          <Link to="/">
            <h2>POMODORO</h2>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar