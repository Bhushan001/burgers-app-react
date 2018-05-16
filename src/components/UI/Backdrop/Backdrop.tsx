import * as React from "react";
import * as classes from "./Backdrop.css";
interface IBackdropProps {
  show: boolean;
  clicked: any;
}

const Backdrop: React.SFC<IBackdropProps> = props => {
  if (props.show) {
    return <div className={classes.Backdrop} onClick={props.clicked} />;
  } else {
    return null;
  }
};

export default Backdrop;
