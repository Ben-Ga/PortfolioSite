import React from "react";
import InfoBox from "../../components/InfoBox";
import ScrnBox from "../../components/ScrnBox";
import stockLogo from '../../res/SNLogo.png'
import stockDash from '../../res/notif-dash.JPG'
import stockSearch from '../../res/notif-search.JPG'
import classes from '../../styles/containers/project_base.module.scss'

const StockNotif = (props) => {
  return (
    <div className={classes.base_container}>
      <h3>Stock Notif</h3>
      <InfoBox
        sectionTitle="Project Outline"
        sectionInfo="Some features still in development... |With a recent interest in the stock market, IoT devices and microcontrollers I have started
        work on a project called StockNotif.| The goal with the project is to connect a web-panel for stock monitoring to a physical IoT device. Of the two, web development
        and electronics, I am much less experienced in the latter and therefore saw this project as a great chance to work on that skill and have some fun. "
        splitFlag="|"
        styleVariant={2}
        alignCenter
        blackText
      />

      <ScrnBox
        imgSrc={stockLogo}
        alt="Logo for stock notification"
        desc=""
        split=""
        customImgHeight={150}
        customImgWidth={150}
      />

      <InfoBox
        sectionTitle="Functionalities and Features"
        sectionInfo=""
        splitFlag="|"
        alignCenter
        titleLeft
        smallList
        blackText
        styleVariant={2}
        listItems={[
          "Web dashboard for adding/removing stocks from a 'watchlist'",
          "Dashboard controls to set limit prices for 'watched' stocks",
          "SQL database storing the tickers and names of watched stocks",
          "Flash API that interacts with a Yahoo Finance API to retrieve prices and store stock picks",
          "Arduino Uno Rev3 requesting data from the Flask API to check prices and limits",
          "Lights/sounds from Arudino to act as real world notifications if a limit price is hit",
        ]}
      />

      <InfoBox
        sectionTitle="Technologies/Modules/Features Used"
        sectionInfo=""
        splitFlag="|"
        alignCenter
        titleLeft
        styleVariant={3}
        listItems={[
          "React (NextJS)",
          "Flask",
          "Python",
          "Yahoo Finance API (yfinance)",
          "Arduino Rev3",
          "ngrok (tunnel localhosted API to public endpoints)"
        ]}
      />

      <a href="https://pypi.org/project/yfinance/">Check out yfinance API</a>

      <ScrnBox
        split=""
        imgSrc={stockDash}
        customImgHeight={415}
        customImgWidth={620}
        desc="Screenshot 1"
        isLarge
      />
      
      <ScrnBox
        split=""
        imgSrc={stockSearch}
        customImgHeight={920}
        customImgWidth={923}
        desc="Screenshot 2"
        isLarge
      />
    </div>
  );
};

export default StockNotif;
