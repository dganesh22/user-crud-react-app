import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-success'>
        <div className="container">
            <NavLink to={`/`} className="navbar-brand">CRUD APP</NavLink>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={`/`} className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/create`} className="nav-link">Create</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Menu
