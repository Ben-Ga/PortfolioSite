import React from "react";

import classes from "../styles/containers/nuscript.module.scss";

import prscripSnap from "../res/scripSnap.JPG";
import metricsSnap from "../res/fullMetrics.JPG";
import resultsSnap from "../res/breakdownSnap.JPG";
import ScrnBox from "../components/ScrnBox";
import InfoBox from "../components/InfoBox";

const NUScript = () => {
  return (
    <div className={classes.container}>
      <h3>NUScript</h3>
      <InfoBox
        sectionTitle="Project Outline"
        sectionInfo="NUScript was a 5 month Web Development Internship that I took part in during my second year of university.
                Although the scope of the project was rather extensive, a brief outline could be detailed as: | A web app, capable of generating
                accurate medical prescriptions with styling true to form. The app allows for students then to spot clinical and legal errors that
                an algorithm has randomly inserted within a quiz like format. A student is then able to review and reflect on their performance with 
                use of user statistics and access to previous answers|
                "
        splitFlag="|"
        styleVariant={2}
        blackText
        alignCenter
      />

      <InfoBox
        sectionTitle="Technologies Used"
        sectionInfo=" Myself and one other Intern were the sole developers of this project, utilising React and Django
                to achieve the final result, within these Webpack, Sass and CSS Modules were also used. | During this project I also made great leaps in my understanding of version control,
                 specifically GitHub as proper use of branches and merging was vital for managing the different sections/features of the app that each of each would be focused on at any one time.|"
        splitFlag="|"
        styleVariant={2}
        blackText
        alignCenter
      />

      <InfoBox
        sectionTitle="Development Process"
        sectionInfo="In terms of the development methodologies used during this project, it was a mix of Rapid Application Development and Agile, most weeks we would have
                a new prototype to showcase and gather feedback on, we found this style of development very condusive to ironing out any miscommunication of features
                before they got too big, it also kept stakeholders very engaged and interested in the process."
        splitFlag="|"
        styleVariant={2}
        blackText
        alignCenter
      />

      <h3>Screenshots </h3>
      <p>As the software is being used within house</p>

      <ScrnBox
        imgSrc={prscripSnap}
        imgAlt={"image of a generated prescription"}
        desc="The image (left) shows an example prescription that NUScript has generated for a user to observe
                for any errors that may be present.|The prescription you see is achieved by dividing up each of the 
                sections into their own (mostly) functional component| During a quiz, a user will see may of these,
                therefore, pagination of these prescriptions was included in this project
                "
        splitFlag="|"
      />

      <ScrnBox
        imgSrc={metricsSnap}
        imgAlt={"image of various metrics for a NUScript user profile"}
        desc="Pictured left are some of the user stats are metrics that are part of any
                user's profile page | Using the public library Victory, I was able to create these sleek and responsive graphs and charts "
        splitFlag="|"
        linkName="Victory"
        linkloc="https://github.com/FormidableLabs/victory"
      />

      <ScrnBox
        imgSrc={resultsSnap}
        imgAlt={"image of a results page for a quiz"}
        desc="Pictured left is an example of what a student would see upon clicking a div for one of their previous quizzes, a breakdown
                of the exact questions asked and answers given"
        splitFlag="|"
        customImgWidth={410}
      />
    </div>
  );
};

export default NUScript;
