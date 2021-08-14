import React from "react";
import InfoBox from "../../components/InfoBox";
import classes from '../../styles/containers/project_base.module.scss'

const GoogleChallenge = (props) => {
  return (
    <div className={classes.base_container}>
      <h1>Google Coding Challenge</h1>
      <InfoBox
        sectionTitle="Project Outline"
        sectionInfo="As part of an internship I took part in (Bright Network, June-2021) a work sample had to be attempted
        and submitted. I undertook the code challenge preseneted by the representatives of Google at the event.|
        This challenge was a YouTube skeleton command land application, written in Java.|
        The challenge consisted of 4 stages, each involving implementing functions of increasing complexity for the
        program (Looping through data structures, error handling, sorting data, implementing search etc).|This challenge also
        gave me my first exposure to peer code review, interns were paired up after submitting to discuss their approaches and provide 
        critiques for each other."
        splitFlag="|"
        styleVariant={2}
        alignCenter
        blackText
      />

      <a href="https://github.com/Ben-Ga/Google-Youtube-Challenge" target="false">See my code</a>

      <InfoBox
        sectionTitle="Skills tested"
        sectionInfo=""
        splitFlag="|"
        alignCenter
        titleLeft
        smallList
        blackText
        styleVariant={3}
        listItems={[
          "Working to a specification",
          "Test driven development",
          "Clean code, maintaining a style",
          "Manipulation of HashMaps",
          "Sorting lists"
        ]}
      />



    </div>
  );
};

export default GoogleChallenge;
