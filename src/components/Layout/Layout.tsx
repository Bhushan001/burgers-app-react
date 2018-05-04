import * as React from "react";
import Aux from "./../../hoc/Aux";
import * as style from "./Layout.css";

interface ILayoutProps {
  name?: string;
}

const Layout: React.SFC<ILayoutProps> = props => {
  return (
    <Aux>
      <div>Toolbar,SideDrawer,Backdrop</div>
      <main className={style.contentArea}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
