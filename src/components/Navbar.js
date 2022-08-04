import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(props) {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">{props.name}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="HookUseState">{props.usestate}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Extra">{props.extra}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Movie">{props.movie}</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar;