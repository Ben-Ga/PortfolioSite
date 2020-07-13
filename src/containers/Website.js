import React from "react";

import classes from "../styles/containers/website.module.scss";
import InfoBox from "../components/InfoBox";

const Website = (props) => {
  return (
    <div className={classes.container}>
      <h3>How I made this website</h3>

      <p>

      </p>
      <InfoBox
        sectionTitle="Overview"
        sectionInfo="This is not a cookie-cutter website, it was created completely from
        scratch within React (the only automated thing being the use of
        create-react-app to quickly fetch the build setup). | The link below will take you to the GitHub
        repository which shows all the code I wrote for it, along with all the seperate commits
        over a period of months adding bits and pieces |Furthermore I make my own manual updates/changes to the hosting
        fileserver to create changes to my website"
        styleVariant={3}
        titleLeft
        blackText
        splitFlag="|"
      />
      <a
        href="https://github.com/Ben-Ga/PortfolioSite"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click for Code Repo
      </a>{" "}
      <InfoBox
        sectionTitle="Technologies/Modules/Features Used"
        sectionInfo=""
        blackText
        splitFlag="|"
        alignCenter
        titleLeft
        styleVariant={3}
        listItems={[
          "ReactJS",
          "React Router",
          "16.8 Hooks",
          "CSS Modules",
          "Sass",
          "Responsive Mobile Design",
          "NodeJs",
          "GitHub",
        ]}
      />
    </div>
  );
};

export default Website;
