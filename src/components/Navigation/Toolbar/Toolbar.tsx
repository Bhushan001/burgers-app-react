import * as React from "react";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "./../../Logo/Logo";
import NavigationItems from "./../NavigationItems/NavigationItems";
import * as classes from "./Toolbar.css";

interface IToolbarProps {
  toggled?:any
}

const Toolbar: React.SFC<IToolbarProps> = props => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.toggled}/>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
