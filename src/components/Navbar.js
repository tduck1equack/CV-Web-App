import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css"

const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid dark-theme">
            <a class="navbar-brand" href="#">{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">{props.one}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{props.two}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{props.three}</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.dropdown}
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">{props.ddone}</a></li>
            <li><a class="dropdown-item" href="#">{props.ddtwo}</a></li>
            <li><a class="dropdown-item" href="#">{props.ddthree}</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;