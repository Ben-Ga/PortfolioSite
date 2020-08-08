import React from "react";

import classes from "../styles/containers/burger.module.scss";
import InfoBox from "../components/InfoBox";
import ScrnBox from "../components/ScrnBox";

const BurgerBuilder = (props) => {
  return (
    <div className={classes.container}>
      <h3>Burger Builder</h3>
      <InfoBox
        sectionTitle="Project Outline"
        sectionInfo="This project was completed with the help of a udemy course, Its purpose was to be an all encompassing wep app 
                that used many of the techniques, practices and features of a modern day web application.|This includes conditional rendering, 
                making http requests to send and recieve data, using non-relational databases, using alternate data stores such as Redux and
                React Context. Furthermore, with the help of course I was able to get a better understanding of proper error handling, e.g how to
                fail quickly/quitely aswell as responsive design with mobile/small screens in mind."
        splitFlag="|"
        styleVariant={3}
        alignCenter
        blackText
      />

      <h3>Below you can see a fully embedded version of this application</h3>
      <p style={{marginLeft: '100px', marginRight: '100px'}}>This project is currently being hosted on github pages, and is linked to a firebase real-time databases
          so any orders that you place, will be sent there, and can are retreived and shown on the orders page
      </p>

      <iframe
        title="burger builder demo"
        frameBorder="0"
        src="https://ben-ga.github.io/Burger-Builder/"
        width="500"
        height="800"
      ></iframe>
    </div>
  );
};

export default BurgerBuilder;
