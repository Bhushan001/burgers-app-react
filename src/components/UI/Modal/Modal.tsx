import * as React from "react";
import * as classes from "./Modal.css";
interface IModalProps {
  show?: true;
}

const Modal: React.SFC<IModalProps> = props => {
  return (
    <div
      className={classes.Modal}
      style={{
        opacity: props.show ? 1 : 0,
        transform: props.show ? "translateY(0)" : "translateY(-100vh)"
      }}
    >
      {props.children}
    </div>
  );
};

export default Modal;
