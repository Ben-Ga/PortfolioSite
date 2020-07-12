import React from "react";

import classes from "../styles/components/infobox.module.scss";

const InfoBox = (props) => {
  return (
    <div
      className={props.styleVariant === 1 ? classes.info : classes.info_outline}
      style={
        props.alignCenter ? { margin: "auto", marginBottom: "25px" } : null
      }
    >
      <h4>{props.sectionTitle}</h4>
      {props.sectionInfo.split(props.splitFlag).map((section) => {
        return (
          <p style={props.blackText ? { color: "black" } : null}>{section}</p>
        );
      })}
      {props.hasImages
        ? props.images.map((crimg) => {
            return <img src={crimg} alt="skill logo" />;
          })
        : null}
    </div>
  );
};

export default InfoBox;
