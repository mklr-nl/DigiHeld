import classes from "./content.module.css";
import Image from "next/image";

function Content() {
  return (
    <div className={classes.content}>
      <div className={classes.img}>
        <Image src="/images/digiheld-logo.png" width={1035} height={439} />
      </div>
      <div className={classes.info}>
        <h3>Digital Product Development and Investment</h3>
        <p>
          "Digital products are programming code-based assets that deliver a
          particular interactive value proposition to the final user. These are
          mostly web, mobile, desktop apps, digital dashboards, controller apps,
          and many more."
        </p>
      </div>
    </div>
  );
}

export default Content;
