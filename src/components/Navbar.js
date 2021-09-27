import React from "react";
import { Link } from "gatsby";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav style={{ paddingBottom: "2rem" }}>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/instructions">Instructions</Link>
        <Link to="/trajectories">Trajectories</Link>
        <Link to="/intersections">Intersections</Link>
        <Link to="/search">Search</Link>
        <Link to="/credits">Credits</Link>
      </div>
    </nav>
  );
}
