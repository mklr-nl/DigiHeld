import classes from "./home.module.css";
import Content from "./content";
import Background from "./background";

export function Home() {
  return (
    <div className={classes.container}>
      <Background />
      <Content />
    </div>
  );
}
