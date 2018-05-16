import * as React from 'react';
import * as burgerLogo from "./../../assets/images/burger-logo.png";
import * as classes from "./Logo.css";

interface ILogoProps {
}

const Logo: React.SFC<ILogoProps> = (props) => {
  return <div className={classes.Logo}>
      <img src={burgerLogo} alt="MyBurger" />
  </div>;
};

export default Logo;