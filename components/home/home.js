import classes from "./home.module.css";
import Content from "./content";

export function Home() {
  return (
    <>
      <div className={classes.bg}></div>
      <div className={`${classes.bg2} ${classes.bg}`}></div>
      <div className={`${classes.bg3} ${classes.bg}`}></div>
      <Content />
    </>
  );
}
