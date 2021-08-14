import React from "react";
import InfoBox from "../components/InfoBox";

import classes from "../styles/containers/project_base.module.scss";
import TomlkDemo from "../res/Tomlk_Demo.mp4";

const Tomlk = () => {
  return (
    <div className={classes.base_container}>
      <h2>Tomlk</h2>

      <InfoBox
        sectionTitle="Project Outline"
        sectionInfo="Tomlk represents my latest project, this page contains a video demo of the current version of Tomlk.|The purpose of this project for me is to develop my authenication skills, user login, using 
        local storage for a persistent login. |In my burger builder project, I utilitsed firebase for authentication, It provided very robust and
        easy to use documentation and endpoints for auth needs. However this time, to gather a deeper understanding, I built out my own endpoints
        using Passport.js local strategies and Express."
        splitFlag="|"
        styleVariant={2}
        alignCenter
        blackText
      />
      <video controls muted style={{marginBottom: '2rem'}}>
        <source src={TomlkDemo} type="video/mp4" />
      </video>

      <InfoBox
        sectionTitle="Next Steps"
        sectionInfo="With the basic structure of the project now fleshed out, some of the features I wish to implement
        next are:|  "
        listItems={["Alternate sign-in (e.g with GitHub account)",
      "Additional privacy settings",
      "Location pinning",
      "Tagging & expanded notifications"]}
        splitFlag="|"
        styleVariant={2}
        alignCenter
        smallList
        blackText
      />
      <InfoBox
        sectionTitle="Technologies/Modules/Features Used"
        sectionInfo=""
        blackText
        splitFlag="|"
        alignCenter
        titleLeft
        styleVariant={3}
        listItems={[
          "React Native",
          "Expo",
          "Axios",
          "Passport.js",
          "Express.js",
          "16.8 Hooks",
          "CSS Modules",
          "NodeJs",
          "ExpressJs",
        ]}
      />
    </div>
  );
};

export default Tomlk;
