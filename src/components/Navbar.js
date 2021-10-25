import React from "react";
import { Link } from "gatsby";
import "./navbar.css";
import Header from "./header";
import { StaticQuery, graphql } from "gatsby";
import itsbIcon from "../images/itsb_icon.svg";
import homeIcon from "../images/home.svg";
import pageIcon from "../images/page.svg";
import vizIcon from "../images/visualization.svg";
import searchIcon from "../images/search.svg";

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
            <div className="main-menu">
              <Link to="/">
                {" "}
                <figure className="menu-icon">
                  <img
                    className="logo"
                    src={homeIcon}
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
                    src={pageIcon}
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
                    src={vizIcon}
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
                    src={vizIcon}
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
                    src={searchIcon}
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
                    src={pageIcon}
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
