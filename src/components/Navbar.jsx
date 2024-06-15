import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg " >
      <div className="container">
        {localStorage.logedin ? 
                <Link className="navbar-brand " to={"/dashboard"}>Blogg.</Link>
                :
                <Link className="navbar-brand" to={"/"}>Blogg.</Link>
            }
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            {localStorage.logedin ? 
                <Link className="nav-link active" aria-current="page" to={"/dashboard"}>Home</Link>
                :
                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
            }
            </li>
            <li className="nav-item">
              <Button />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
