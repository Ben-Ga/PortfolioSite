import React from "react";

import classes from "../styles/containers/projects.module.scss";
import Project from "../components/Project";

import projectPic from "../res/NUScriptLogo.JPG";
import websitePic from "../res/websitePic.png";
import burgerPic from '../res/burgerLogo.JPG'
import tomlkPic from '../res/tomlk.png'
import aDash from '../res/ad-logo.JPG'
import stockLogo from '../res/SNLogo.png'
import challengePic from '../res/java-peek.JPG'

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
      <Link to="/projects/stock-notif">
        <Project
          projectTitle="Stock Notif"
          projectDesc="An stock monitoring dashboard with IoT functionality through an Arduino & flask api"
          customHeight={150}
          customWidth={150}
          img={stockLogo}
        />
      </Link>
      <Link to="/projects/animal-dashboard">
        <Project 
          projectTitle="Animals Dashboard"
          projectDesc="Like, dislike and generate thousands of pictures of all types of animals"
          img={aDash}
          customWidth={380}
          customHeight={90}
        />
      </Link>
      <Link to="/projects/tomlk">
        <Project 
          projectTitle="Tomlk"
          projectDesc="A twitter/social network clone. Focusing on Authentication and Redux skills"
          img={tomlkPic}
          customWidth={250}
          customHeight={250}
        />
      </Link>
      
      <Link to="/projects/burgerbuilder/">
        <Project
          projectTitle="Burger Builder"
          projectDesc="A react/firebase application I created as part of a udemy course on react"
          img={burgerPic}
          customWidth={250}
          customHeight={200}
        />
      </Link>
      <Link to="/projects/website">
        <Project
          projectTitle="This website"
          projectDesc="Created and hosted from scratch by myself, with no use of styling libraries"
          img={websitePic}
        />
      </Link>

      <Link to="/projects/google-challenge">
        <Project
          projectTitle="Google Coding Challenge"
          projectDesc="A Java sample completed for Google as part of a Bright Network internship"
          img={challengePic}
          customHeight={250}
          customWidth={337}
        />
      </Link>

    </div>
  );
};

export default ProjectPage;
