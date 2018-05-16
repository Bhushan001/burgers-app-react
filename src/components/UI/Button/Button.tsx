import * as React from "react";
import * as classes from "./Button.css";

interface IButtonProps {
  clicked?: any;
  btnType:string
}

const Button: React.SFC<IButtonProps> = props => {
  return <button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>;
};

export default Button;
