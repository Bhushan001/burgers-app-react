import * as React from "react";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";
import * as classes from "./Modal.css";

interface IModalProps {
  show: boolean;
  modalClosed:any
}

const Modal: React.SFC<IModalProps> = props => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          opacity: props.show ? 1 : 0,
          transform: props.show ? "translateY(0)" : "translateY(-100vh)"
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;
