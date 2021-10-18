import React from "react";
import PropTypes from "prop-types";
import "./layout.css";
import Navbar from "./navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="content">{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
