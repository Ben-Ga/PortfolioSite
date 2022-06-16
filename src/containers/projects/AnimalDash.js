import React from "react";
import InfoBox from "../../components/InfoBox";
import ScrnBox from "../../components/ScrnBox";
import dashSnap from "../../res/animal-dash-snap.JPG";
import classes from '../../styles/containers/project_base.module.scss'


const AnimalDash = (props) => {
  return (
    <div className={classes.base_container}>
      <h1>Animals Dashboard</h1>
      <InfoBox
        sectionTitle="Project Outline"
        sectionInfo="This project was test of what I could produce in a few hours.
        It was made as a work sample for a web development role.|It's purpose being to display
            my ability to interact with APIs, parsing and handling of JSON data and use of modern React features such as
            hooks with functional components.
            | "
        splitFlag="|"
        styleVariant={2}
        alignCenter
        blackText
      />
      <a href="https://ben-ga.github.io/Animals-Dashboard/">Try it out</a>

      <ScrnBox
        split=""
        imgSrc={dashSnap}
        customImgWidth={899}
        customImgHeight={508}
        desc="Dashboard screenshot"
        isLarge
        noDesc
      />
    </div>
  );
};

export default AnimalDash;
