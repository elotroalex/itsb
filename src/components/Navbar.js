import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <h1>Menu</h1>
      <div className="links">
        <Link to="/" style={{ padding: "1rem" }}>
          Home
        </Link>
        <Link to="instructions" style={{ padding: "1rem" }}>
          Instructions
        </Link>
        <Link to="/trajectories" style={{ padding: "1rem" }}>
          Trajectories
        </Link>
        <Link to="/intersections" style={{ padding: "1rem" }}>
          Intersections
        </Link>
        <Link to="/search" style={{ padding: "1rem" }}>
          Search
        </Link>
        <Link to="/credits" style={{ padding: "1rem" }}>
          Credits
        </Link>
      </div>
    </nav>
  );
}
