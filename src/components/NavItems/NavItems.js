import React from "react";

import { Link } from "react-router-dom";
import classes from "../../styles/containers/navitems.module.scss";
import NavItem from "../NavItems/NavItem";

const NavItems = (props) => {
  return (
    <ul className={classes.navitems}>
      <NavItem>
        <Link to="/">
          <div>About</div>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/skills">
          <div>Skills</div>
        </Link>
      </NavItem>
      <NavItem>
        {" "}
        <Link to="/projects">
          <div>Projects</div>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/contact">
          <div>Contact & Socials</div>
        </Link>
      </NavItem>
    </ul>
  );
};

export default NavItems;
