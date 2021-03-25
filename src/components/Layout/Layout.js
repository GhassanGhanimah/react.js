import React from "react";
import Aux from "../../hoc/Auus";
import classes from "./Layout.css";

const Layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer ,Backdrop</div>
    <main classname={classes.Content}>{props.children}</main>
  </Aux>
);
export default Layout;
