import React from "react";
import NavItems from '../../components/NavItems/NavItems'
import Backdrop from "../Backdrop/Backdrop";

import classes from "../../styles/containers/sidedrawer.module.scss";

const SideDrawer = (props) => {


    let attachedClasses = [classes.sidedrawer, classes.closed]
    if(props.open){
        attachedClasses = [classes.sidedrawer, classes.open]
    }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.logo}>
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
