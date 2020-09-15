import React from "react";

import classes from "../styles/components/scrn.module.scss";

const ScrnBox = (props) => {
  return (
    <div className={classes.scrbox}>
      <div className={classes.imgBox}>
        <img alt={props.imgAlt} src={props.imgSrc} style={props.customImgWidth ? {width: props.customImgWidth} : null}/>
      </div>
      <div className={classes.textBoxes}>
        {props.desc.split(props.splitFlag).map((section) => {
          return <p>{section}</p>;
        })}
        <a
          href={props.linkloc}
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.linkName}
        </a>
      </div>
    </div>
  );
};

export default ScrnBox;
