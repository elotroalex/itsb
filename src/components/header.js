import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import itsbIcon from "../images/itsb_icon.svg";

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: "#fcb040",
      marginBottom: "1.45rem",
      display: "flex",
      width: "300px",
      height: "70px",
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 300,
        padding: "1rem",
      }}
    >
      <Link
        to="/"
        style={{
          color: "black",
          textDecoration: "none",
          fontSize: "1rem",
          display: "flex",
        }}
      >
        <figure
          style={{
            display: "flex",
            marginBottom: 0,
          }}
        >
          <img
            src={itsbIcon}
            alt="ITSB Icon: A concentric circle."
            style={{
              width: "1rem",
            }}
          />
        </figure>
        <span
          style={{
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          {siteTitle}
        </span>
      </Link>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
