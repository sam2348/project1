import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="">Hook's</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="HookUseState">UseState</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">UseEffect</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">UseContext</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Extra">Extra</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Movie">Movie</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar;