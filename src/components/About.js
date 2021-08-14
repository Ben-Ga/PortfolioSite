import React from "react";

import classes from "../styles/components/about.module.scss";

import InfoBox from "../components/InfoBox";

import { motion } from "framer-motion";

const About = (props) => {
  return (
    <div className={classes.aboutContainer}>
      {/* <h1>About Me</h1> */}
      <motion.h1 whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
        About Me
      </motion.h1>
      {/* <h2>Ben Gallagher</h2> */}
      <motion.h2
        animate={{
          scale: [0, 1],
        }}
        transition={{ duration: 0.9 }}
      >
        Ben Gallagher
      </motion.h2>
      <motion.h3
        animate={{
          scale: [0, 1],
        }}
        transition={{ duration: 1.5 }}
      >
        BSc Hons Computer Science - Global Technology at Berenberg
      </motion.h3>
      <InfoBox
        sectionTitle="EXPERIENCE"
        sectionInfo="NUScript - March 2020 - July 2020.| Working as Front end web development intern for Newcastle University| Developing
                a medical prescription generation and error simulation tool for students to use as a learing/revision tool (Please see project
                  page for an indepth description & screenshots)|
                Achieved using ReactJs, Django and MySql technologies |___________________________________________________________|
                Bright Network Internship - June 2020 + June 2021| In this short but valuable internship, myself and other students were given the
                oppotunity to work alongside FANG companies (including Google, Amazon and Goldman Sachs) to develop our skills in agile development methods|
                The experience culminated in a work sample in which we were tasked with researching methods for facial recognition, generating user stories,
                assessing vulnerabilities and presenting a brief project roadmap for implementing this feature"
        splitFlag="|"
        styleVariant={4}
      />

      <InfoBox
        sectionTitle="EDUCATION"
        sectionInfo="Graduated with a First class Honours in Computer Science from Newcastle Universtiy.|
            My dissertation covered optimisation techniques for siamese neural networks
            working on fine-grained image classification, also assessing the degree to which performance gains are
            individualised to data sets of such fine-grained nature.|
            |Studied Computer Science, Economics and Modern History at A level|
            Acheiving the grades ABB respectively|
            6As and 4Bs at GCSE level"
        splitFlag="|"
        styleVariant={4}
      />

      <InfoBox
        sectionTitle="TECHNOLOGIES"
        sectionInfo="ReactJs: 2.5 years, Java: 4 Years, HTML & CSS: 3 Years, Git & version control, C++"
        splitFlag=","
        styleVariant={4}
      />
    </div>
  );
};

export default About;
