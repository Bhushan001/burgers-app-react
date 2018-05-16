import * as React from "react";
import Aux from "./../../../hoc/Aux";
import Logo from "./../../Logo/Logo";
import Backdrop from "./../../UI/Backdrop/Backdrop";
import NavigationItems from "./../NavigationItems/NavigationItems";
import * as classes from "./SideDrawer.css";

interface ISideDrawerProps {
  closed: any;
  open: boolean;
}

const SideDrawer: React.SFC<ISideDrawerProps> = props => {
  let attachedClasses=[classes.SideDrawer,classes.Close];
  if(props.open){
    attachedClasses=[classes.SideDrawer,classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
