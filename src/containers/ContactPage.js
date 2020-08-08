import React from "react";
import classes from "../styles/containers/contact.module.scss";

const Contact = (props) => {
  return (
    <div className={classes.container}>
      <h2>Contacts & Socials</h2>

      <h3>Emails</h3>
      <p>ben@bngallagher.co.uk</p>
      <p>b.gallagher@newcastle.ac.uk</p>
      <h3>Socials</h3>
      <a
        href="https://www.linkedin.com/in/ben-gallagher-5a826a190/"
        target="_blank"
        rel="noopener noreferrer" 
      >
        LinkedIn
      </a>
      <br/>
      <a
        href="https://github.com/Ben-Ga"
        target="_blank"
        rel="noopener noreferrer" 
      >
        GitHub - See code from some past and current projects 
      </a>
    </div>
  );
};

export default Contact;
