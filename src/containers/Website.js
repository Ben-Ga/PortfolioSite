import React from "react";

import classes from "../styles/containers/website.module.scss";
import InfoBox from '../components/InfoBox'

const Website = (props) => {
  return (
    <div className={classes.container}>
      <h3>How I made this website</h3>
      <p>
        This is not a cookie-cutter website, it was created completely from
        scratch within React (the only automated thing being the use of
        create-react-app to quickly fetch the build setup).{" "}
        <a
          href="https://github.com/Ben-Ga/PortfolioSite"
          target="_blank"
          rel="noopener noreferrer"
        >
          This link
        </a>{" "}
        will take you to the GitHub which shows all the code I wrote for it,
        along with all the seperate commits over a period of months adding bits
        and pieces/
      </p>
      <p>
        Furthermore I make my own manual updates/changes to the hosting
        fileserver to create changes to my website
      </p>

      <InfoBox 
        sectionTitle="Technologies Used"
        sectionInfo="Mow"
        blackText
        splitFlag="|"
        alignCenter
      />
    </div>
  );
};

export default Website;
