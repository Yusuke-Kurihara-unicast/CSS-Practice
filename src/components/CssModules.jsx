import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- Css style -</p>
      <button className={classes.button}>aa</button>
    </div>
  );
};
