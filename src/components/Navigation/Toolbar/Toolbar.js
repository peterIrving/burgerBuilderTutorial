import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo.js";
import NavigationItems from "../NavigationItems/NavigationItems.js";
import SideDrawer from "../SideDrawer/SideDrawer.js";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <SideDrawer />
    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo></Logo>
    </div>

    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
