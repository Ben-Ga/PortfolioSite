import React from "react";

import classes from "../styles/components/infobox.module.scss";

const InfoBox = (props) => {
  return (
    <div className={props.styleVariant === 1 ? classes.info : classes.info_outline}>
      <h4>{props.sectionTitle}</h4>
      {props.sectionInfo.split(props.splitFlag).map((section) => {
        return <p>{section}</p>;
      })}
      {props.hasImages ? props.images.map(crimg =>{
        return(
          <img src={crimg} alt="skill logo"/>
        )
      }) : null}
    </div>
  );
};

export default InfoBox;
