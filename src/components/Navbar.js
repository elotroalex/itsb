import React from "react";
import { Link } from "gatsby";
import "./navbar.css";
import Header from "./header";
import { StaticQuery, graphql } from "gatsby";
import itsbIcon from "../images/itsb_icon.svg";

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
              <Link to="/">
                {" "}
                <figure className="menu-icon">
                  <img
                    className="logo"
                    src={itsbIcon}
                    alt="ITSB Icon: A concentric circle."
                  />
                </figure>
                <span className="menu-title">Home</span>
              </Link>
              <Link to="/instructions">
                {" "}
                <figure className="menu-icon">
                  <img
                    className="logo"
                    src={itsbIcon}
                    alt="ITSB Icon: A concentric circle."
                  />
                </figure>
                <span className="menu-title">Instructions</span>
              </Link>
              <Link to="/trajectories">
                {" "}
                <figure className="menu-icon">
                  <img
                    className="logo"
                    src={itsbIcon}
                    alt="ITSB Icon: A concentric circle."
                  />
                </figure>
                <span className="menu-title">Trajectories</span>
              </Link>
              <Link to="/intersections">
                {" "}
                <figure className="menu-icon">
                  <img
                    className="logo"
                    src={itsbIcon}
                    alt="ITSB Icon: A concentric circle."
                  />
                </figure>
                <span className="menu-title">Intersections</span>
              </Link>
              <Link to="/search">
                {" "}
                <figure className="menu-icon">
                  <img
                    className="logo"
                    src={itsbIcon}
                    alt="ITSB Icon: A concentric circle."
                  />
                </figure>
                <span className="menu-title">Search</span>
              </Link>
              <Link to="/credits">
                {" "}
                <figure className="menu-icon">
                  <img
                    className="logo"
                    src={itsbIcon}
                    alt="ITSB Icon: A concentric circle."
                  />
                </figure>
                <span className="menu-title">Credits</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    />
  );
}
