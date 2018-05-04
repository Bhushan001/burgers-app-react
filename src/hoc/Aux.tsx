
import * as React from "react";

interface IAuxProps {}

const Aux: React.SFC<IAuxProps> = props => {
  return <span>{props.children}</span>;
};

export default Aux;