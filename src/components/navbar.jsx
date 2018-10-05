import React from 'react';

const NavBar = ({ totalCounters, onReset }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </span>
      <button
        onClick={onReset}
        className="btn btn-secondary"
      >
        Reset
      </button>
    </nav>
  );
};

export default NavBar;
