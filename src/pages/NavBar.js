import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        People Tracker
      </Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/people" className="nav-link">
              People
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/people/add" className="nav-link">
              Create Person
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/documents" className="nav-link">
              Documents
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/documents/add" className="nav-link">
              Create Document
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/users/add" className="nav-link">
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
