import classes from "./footer.module.css";

function Footer() {
  return (
    <div className={classes.container}>
      <span>martijn@digiheld.nl</span>
      <span>
        <span className={classes.icon}>©</span>2022
      </span>
    </div>
  );
}

export default Footer;
