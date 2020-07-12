import React from "react";

import classes from "../styles/containers/projects.module.scss";
import Project from "../components/Project";

import projectPic from "../res/NUScriptLogo.JPG";
import websitePic from "../res/websitePic.png";

import { Link } from "react-router-dom";

const ProjectPage = (props) => {
  return (
    <div className={classes.projects}>
      <h2>Project Page</h2>
      <h3>
        See below some of my past and current projects, click on any to navigate
        for a summary of each
      </h3>

      <Link to="/projects/nuscript/">
        <Project
          projectTitle="NUScript"
          projectDesc="React/Django web application used by medical students to 
        quiz themselves on medical prescriptions"
          img={projectPic}
        />
      </Link>

      <Project
        projectTitle="Burger Builder"
        projectDesc="A react/firebase application I created as part of a udemy course on react"
      />
      <Link to="/projects/website">
        <Project
          projectTitle="This website"
          projectDesc="Created and hosted from scratch by myself, with no use of styling libraries"
          img={websitePic}
        />
      </Link>
    </div>
  );
};

export default ProjectPage;
