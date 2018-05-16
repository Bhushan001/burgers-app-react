import * as React from "react";
import * as classes from "./DrawerToggle.css";
interface IDrawerToggleProps {
  clicked?: any;
}

const DrawerToggle: React.SFC<IDrawerToggleProps> = props => {
  return (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default DrawerToggle;
