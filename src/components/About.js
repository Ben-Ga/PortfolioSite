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
        sectionInfo="NUScript - March 2020 - July 2020.| Working as Front end web development intern for Newcastle University| Developing
                a medical prescription generation and error simulation tool for students to use as a learing/revision tool (Please see project
                  page for an indepth description & screenshots)|
                Achieved using ReactJs, Django and MySql technologies |___________________________________________________________|
                Bright Network Internship - June 2020 | In this short but valuable internship, myself and other students were given the
                oppotunity to work alongside FANG companies (including Google, Amazon and Goldman Sachs) to develop our skills in agile development methods|
                The experience culminated in a work sample in which we were tasked with researching methods for facial recognition, generating user stories,
                assessing vulnerabilities and presenting a brief project roadmap for implementing this feature"
        splitFlag="|"
        styleVariant={2}

      />

      <InfoBox
        sectionTitle="Key Hard Skills"
        sectionInfo="ReactJs: 1.5 year, Java: 4 Years, HTML & CSS: 3 Years, Git and version control, GSuite, C#"
        splitFlag=","
        styleVariant={2}
      />
      <InfoBox
        sectionTitle="Education"
        sectionInfo="I am currently a 2nd year computer science student, studying at Newcastle Universtiy.
            |Studied Computer Science, Economics and Modern History at A level|
            Acheiving the grades ABB respectively|
            6As and 4Bs at GCSE level"
        splitFlag="|"
        styleVariant={2}
      />
    </div>
  );
};

export default About;
