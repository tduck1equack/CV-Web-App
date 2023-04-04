import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css"

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid dark-theme">
            <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul classNameName="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">{props.one}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.two}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.three}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.dropdown}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">{props.ddone}</a></li>
            <li><a className="dropdown-item" href="#">{props.ddtwo}</a></li>
            <li><a className="dropdown-item" href="#">{props.ddthree}</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;