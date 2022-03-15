import classes from "./content.module.css";

function Content() {
  return (
    <div className={classes.content}>
      <h1>Digiheld</h1>
      <h3>Digital Product Development and Investment</h3>
      <p>
        "Digital products are programming code-based assets that deliver a
        particular interactive value proposition to the final user. These are
        mostly web, mobile, desktop apps, digital dashboards, controller apps,
        and many more."
      </p>
    </div>
  );
}

export default Content;
