import * as React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import * as classes from "./NavigationItems.css";
interface INavigationItemsProps {}
const NavigationItems: React.SFC<INavigationItemsProps> = props => {
  return (
    <ul className={classes.Navigationitems}>
      <NavigationItem link="/" active={true}>Home</NavigationItem>
      <NavigationItem link="/checkout">Checkout</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
