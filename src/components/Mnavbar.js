import React from "react";
import { NavLink } from 'react-router-dom';


function Mnabvar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/mhome/:mhome">NetFlix</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/mhome/:mhome">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="">About</NavLink>
              </li>
            </ul>
            <div>
              <li>
                <NavLink className="btn btn-light m-1" to="/user/:username">AddUser</NavLink>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Mnabvar;
