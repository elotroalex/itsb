import React from "react";
import { Link } from "gatsby";
import "./navbar.css";
import Header from "./header";
import { StaticQuery, graphql } from "gatsby";

export default function Navbar() {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <div className="navbar">
          <Header siteTitle={data.site.siteMetadata.title} />
          <nav className="navigation" style={{ paddingBottom: "2rem" }}>
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/instructions">Instructions</Link>
              <Link to="/trajectories">Trajectories</Link>
              <Link to="/intersections">Intersections</Link>
              <Link to="/search">Search</Link>
              <Link to="/credits">Credits</Link>
            </div>
          </nav>
        </div>
      )}
    />
  );
}
