import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import itsbIcon from "../images/itsb_icon.svg";
import "./header.css";

const Header = ({ siteTitle }) => (
  <div className="title">
    <Link to="/">
      <figure className="menu-icon">
        <img
          className="logo"
          src={itsbIcon}
          alt="ITSB Icon: A concentric circle."
        />
      </figure>
      <span className="menu-title">{siteTitle}</span>
    </Link>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
