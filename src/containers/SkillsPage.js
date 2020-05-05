import React from "react";

import classes from "../styles/containers/skills.module.scss";
import reactLogo from '../res/reactlogo.png'
import htmlcssLogo from '../res/htmlcss.png'
import javalogo from '../res/javalogo.png'
import djlogo from '../res/djlogo.png'


import InfoBox from "../components/InfoBox";

const SkillsPage = (props) => {

    let logos = [javalogo, reactLogo, htmlcssLogo, djlogo]

  return (
    <div className={classes.skillContainer}>
      <h2>Skills Page</h2>

      <InfoBox 
      sectionTitle="Hard Skills" 
      sectionInfo="Java - my most comfortable object oreintated language |ReactJs - most used modern web framework|
      HTML & CSS| Django - recent exposure to this in my recent internship" 
      splitFlag="|" 
      styleVariant={2}
      images={logos}
      hasImages={true}
      />
      <InfoBox 
      sectionTitle="Soft Skills" 
      sectionInfo="Excellent written and verbal communication, references for this available upon request, (see contact and socials
      on how to reach me for these)|Experience in managing small teams|Ability to work effecitively in a remote position|Ability to work in agile
      envirnoments" 
      splitFlag="|" 
      styleVariant={2}/>
      <InfoBox
        sectionTitle="Skills I'm working towards"
        sectionInfo="Express - Currently working more with this framework as it pairs so well with React apps|
        Authentication - I am looking to work this dimension into more of my personal projects recently|
        MongoDB - non relational database solutions are something I am looking to work with in the future, Mongo, in use
        with the MERN stack in particular"
        splitFlag="|"
        styleVariant={2}
      />
    </div>
  );
};

export default SkillsPage;
