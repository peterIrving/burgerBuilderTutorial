import React from "react";
import Logo from "../../Logo/Logo.js";
import NavigationItems from "../NavigationItems/NavigationItems.js";
import classes from "./SideDrawer.css";

const SideDrawer = props => {
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
