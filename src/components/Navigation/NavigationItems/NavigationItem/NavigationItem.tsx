import * as React from "react";
import * as classes from "./NavigationItem.css";
interface INavigationItemProps {
    link?:string;
    active?:boolean
}

const NavigationItem: React.SFC<INavigationItemProps> = props => {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? classes.active : ''}>{props.children}</a>
    </li>
  );
};

export default NavigationItem;
