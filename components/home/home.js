import classes from "./home.module.css";
import Content from "./content";
import { Fragment } from "react";

export function Home() {
  return (
    <Fragment>
      <div className={classes.bg}></div>
      <div className={`${classes.bg2} ${classes.bg}`}></div>
      <div className={`${classes.bg3} ${classes.bg}`}></div>
      <Content />
    </Fragment>
  );
}
