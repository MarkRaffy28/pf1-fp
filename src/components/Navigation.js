import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Styles.css";
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.php">
          <img src="https://ispsc.edu.ph/file-manager/images/ispsc_logo_2.png" alt="logo" className="logo"></img>
          <span className="fw-bold navbar-title">ISPSC Library</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
          <i className="fa-solid fa-burger fa-1.5x"></i>
        </button>
      <div className="collapse navbar-collapse" id="navbar-content">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavLink to="/home" className={({isActive}) => isActive ? "nav-link fw-bold active" : "nav-link fw-bold"}>
              Home
            </NavLink>
            <NavLink to="/transactions" className={({isActive}) => isActive ? "nav-link fw-bold active" : "nav-link fw-bold"}>
              Transactions
            </NavLink>
            <NavLink to="/notifications" className={({isActive}) => isActive ? "nav-link fw-bold active" : "nav-link fw-bold"}>
              Notifications
            </NavLink>
            <NavLink to="/profile" className={({isActive}) => isActive ? "nav-link fw-bold active" : "nav-link fw-bold"}>
              Profile
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation