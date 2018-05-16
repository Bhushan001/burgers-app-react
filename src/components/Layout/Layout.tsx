import * as React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Aux from "./../../hoc/Aux";
import SideDrawer from "./../Navigation/SideDrawer/SideDrawer";
import * as style from "./Layout.css";

export interface ILayoutProps {
  name?: string;
}
class Layout extends React.Component<ILayoutProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showSideDrawer: false
    };
  }

  public sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  public sideDrawerToggleHandler = () => {
    this.setState((prevState: any) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      };
    });
  };
  public render() {
    return (
      <Aux>
        <Toolbar toggled={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={style.contentArea}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
