import React from "react";

// Stateless functional Component

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="https://www.google.com/">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
