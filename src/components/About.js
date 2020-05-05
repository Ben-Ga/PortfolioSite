import React from "react";

import classes from "../styles/components/about.module.scss";

import InfoBox from "../components/InfoBox";

const About = (props) => {
  return (
    <div className={classes.aboutContainer}>
      <h3>About Me</h3>
      <h2>Ben Gallagher - Computing Student - Web Intern </h2>

      <InfoBox
        sectionTitle="Experience"
        sectionInfo="March 2020 - present.| Working as Front end web development intern for Newcastle University| Developing
                a medical prescription generation and error simulation tool for students to use as a learing/revision tool|
                Achieved using ReactJs, Django and MySql technologies"
        splitFlag="|"
        styleVariant={1}

      />

      <InfoBox
        sectionTitle="Key Hard Skills"
        sectionInfo="ReactJs: 1 year, Java: 4 Years, HTML & CSS: 3 Years, Git and version control,"
        splitFlag=","
        styleVariant={1}
      />
      <InfoBox
        sectionTitle="Education"
        sectionInfo="I am currently a 2nd year computer science student, studying at Newcastle Universtiy.
            |Studied Computer Science, Economics and Modern History at A level"
        splitFlag="|"
        styleVariant={1}
      />
    </div>
  );
};

export default About;
