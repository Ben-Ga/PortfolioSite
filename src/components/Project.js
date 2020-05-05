import React, { useState } from "react";

import classes from "../styles/components/project.module.scss";

const Project = (props) => {
  const [showFrontdrop, setHidden] = useState(false);
  return (
    <div
      className={classes.project}
      onMouseEnter={() => setHidden(true)}
      onMouseLeave={() => setHidden(false)}
    >
      <div className={showFrontdrop ? classes.frontdrop : null}></div>
      {showFrontdrop ? (
        <div className={classes.hoverInfo}>
          <h4>{props.projectTitle}</h4>
          <p>{props.projectDesc}</p>
        </div>
      ) : <img src={props.img} style={{width: 'inherit', height: 'height'}}/>}
    </div>
  );
};

export default Project;
