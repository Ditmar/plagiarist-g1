import React from "react";
import {useStyles} from "./header.styles.js";
export const SearchTheses = ({ resultado }) => {
    const classes= useStyles ();
  return (
    <div
    className={classes.searchtheses}
      dangerouslySetInnerHTML={{ __html: resultado }}
      
    ></div>
  );
};
