import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          People Tracker
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Home
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
          </ul>
        </div>
      </nav>
    );
  }
}
