import React, { useState, useEffect } from "react";

import classes from "../styles/components/infobox.module.scss";

const InfoBox = (props) => {
  const [styleVar, setStyle] = useState(classes.info);
  // eslint-disable-next-line
  useEffect(() => {
    switch (props.styleVariant) {
      case 1:
        setStyle(classes.info);
        break;
      case 2:
        setStyle(classes.info_outline);
        break;
      case 3:
        setStyle(classes.info_noborder);
        break;
      case 4:
        setStyle(classes.info_tech);
        break;
      default:
        break;
    }
  });

  return (
    <div
      className={
        styleVar //not sure how safe this is, thought it would cause infinte loop
      }
      style={
        props.alignCenter ? { margin: "auto", marginBottom: "25px" } : null
      }
    >
      <h4 style={props.titleLeft ? { textAlign: "left" } : null}>
        {props.sectionTitle}
      </h4>
      <div className={classes.info_body}>
        {props.sectionInfo.split(props.splitFlag).map((section) => {
          return (
            <p style={props.blackText ? { color: "black" } : null}>{section}</p>
          );
        })}
      </div>

      <ul className={props.smallList ? classes.smalllist : null}>
        {props.listItems
          ? props.listItems.map((item) => {
              return <li>{item}</li>;
            })
          : null}
      </ul>

      {props.hasImages
        ? props.images.map((crimg) => {
            return <img src={crimg} alt="skill logo" />;
          })
        : null}
    </div>
  );
};

export default InfoBox;
