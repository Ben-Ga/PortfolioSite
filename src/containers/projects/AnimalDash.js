import React from "react";
import InfoBox from "../../components/InfoBox";
import dashSnap from "../../res/animal-dash-snap.JPG";

const AnimalDash = (props) => {
  return (
    <div>
      <InfoBox
        sectionTitle="Project Outline"
        sectionInfo="This project was made as a work sample for a web development role I was applying for, it focuses
            on interaction with APIs, parsing and handling of JSON data and use of modern React features such as
            hooks, and entirely functional components."
        splitFlag="|"
        styleVariant={3}
        alignCenter
        blackText
      />
      <div>
        <a href="https://ben-ga.github.io/Animals-Dashboard/">
          Visit the website here
        </a>
        <br />
        <img
          src={dashSnap}
          alt="Screenshot of my animal dashboard project"
          width="800"
          style={{marginTop: '5vh'}}
        />
      </div>
    </div>
  );
};

export default AnimalDash;
