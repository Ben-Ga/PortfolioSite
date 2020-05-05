import React from "react";

import classes from "../styles/containers/projects.module.scss";
import Project from "../components/Project";

import projectPic from '../res/javalogo.png'

import {Link} from 'react-router-dom'

const ProjectPage = (props) => {
  return (
    <div className={classes.projects}>
      <h2>Project Page</h2>
      <h3>See below some of my past and current projects, click on any to navigate for a summary of each</h3>
      
      <Link to="/projects/nuscript/">
        <Project projectTitle="NUScript" projectDesc="React/Django web application used by medical students to 
        quiz themselves on medical prescriptions" img={projectPic}/>
      </Link>

      <Project projectTitle="Title 2" projectDesc="some information 2" />
      <Project projectTitle="Title 3" projectDesc="some information 3" />
    </div>
  );
};

export default ProjectPage;
