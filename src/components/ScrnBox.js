import React from "react";

import classes from "../styles/components/scrn.module.scss";

const ScrnBox = (props) => {
  return (
    <div className={classes.scrbox}>
      <div className={ props.isLarge ? classes.imgBox: classes.persistantImgBox}>
        <img alt={props.imgAlt} src={props.imgSrc} style={props.customImgWidth ? {width: props.customImgWidth, height: props.customImgHeight} : null}/>
      </div>
      {props.desc !== "" && !props.noDesc ? (<div className={classes.textBoxes}>
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

      </div>) : null}

      {props.isLarge ? 
      <a className={classes.mobileLink} href={props.imgSrc}>{props.desc}</a>
      
      : null}
    </div>
  );
};

export default ScrnBox;
