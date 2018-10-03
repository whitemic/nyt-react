import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-info" style={{ marginBottom: "2%", backgroundColor: "#CCCBDF" }}>
    <a className="navbar-brand" href="/">
      NYT Articles
    </a>
    <a className="nav-link text-white" href="/">Home</a>
    <a className="nav-link text-white" href="/saved">Saved</a>
  </nav>
);

export default Nav;