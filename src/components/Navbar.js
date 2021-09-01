import React from "react";

import { Link } from "react-router-dom";
import Menu from "../UI/SideDrawer/Menu";

import classes from "../styles/components/navbar.module.scss";

const Navbar = (props) => {
  return (
    <div className={classes.nav_container}>
      <nav className={classes.nav}>
        <Menu clicked={props.showSidedrawer} />
        <Link to="/">
          <div>About</div>
        </Link>
        <Link to="/skills">
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
