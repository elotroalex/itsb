import React from "react";
import PropTypes from "prop-types";
import "./prose.css";

const Prose = ({ children }) => <div className="prose">{children}</div>;

Prose.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Prose;
