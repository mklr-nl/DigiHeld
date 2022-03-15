import classes from "./background.module.css";
import { Fragment } from "react";
function Background() {
  return (
    <Fragment>
      <div className={classes.bg} />
      <div className={`${classes.bg2} ${classes.bg}`} />
      <div className={`${classes.bg3} ${classes.bg}`} />
    </Fragment>
  );
}

export default Background;
