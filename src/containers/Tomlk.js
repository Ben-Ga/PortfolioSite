import React from "react";
import InfoBox from "../components/InfoBox";

import classes from "../styles/containers/tomlk.module.scss";

const Tomlk = () => {
  return (
    <div className={classes.container}>
      <h2>Tomlk</h2>

      <InfoBox
        sectionTitle="Project Outline"
        sectionInfo="Tomlk is my newest project as is currently something I am working on, hence this page will show my ideas and concepts
        along with some starter code and screenshots.|The purpose of this project for me is to develop my authenication skills, user login, using 
        local storage for a persistant login etc. This project will also make use of Redux and asynchronous code. So I will be using action creators and redux thunk
        to handle these sections of the app.| In my burger builder project, I utilitsed firebase for authentication, It provided very robust and
        easy to use documentation and endpoints for auth needs. However this time, to gather a deeper understanding, I will be constructing my own endpoints
        and using Passport.js and Express."
        splitFlag="|"
        styleVariant={3}
        alignCenter
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
          "ReactJS",
          "React Router",
          "Redux",
          "Redux thunk / middleware",
          "Axios",
          "Passport.js",
          "Express.js",
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

export default Tomlk;
