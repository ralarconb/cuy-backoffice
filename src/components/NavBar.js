// import { Component } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/people">People</Link>
      </li>
    </ul>
  );
}
