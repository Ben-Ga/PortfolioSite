import React from "react";

import {Link} from "react-router-dom";

import classes from "../styles/components/navbar.module.scss";

const Navbar = () => {
  return (
    <div>
      <nav className={classes.nav}>
          <Link to="/">
            <div>About</div>
          </Link>
          <Link to="/skills" >
            <div>Skills</div>
          </Link>
          <Link to="/projects">
            <div>Projects</div>
          </Link>
          <Link to="/contact">
            <div>Contact & Socials</div>
          </Link>
      </nav>
    </div>
  );
};

export default Navbar;
