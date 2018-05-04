import * as React from "react";
import * as classes from "./BuildControl.css";
interface IBuildControlProps {
  label?: string;
  added?:any,
  removed?:any,
  disabled:any
}

const BuildControl: React.SFC<IBuildControlProps> = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
      <button className={classes.More} onClick={props.added}>More</button>
    </div>
  );
};

export default BuildControl;
