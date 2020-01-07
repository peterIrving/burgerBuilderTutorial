import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem.js";

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      <NavigationItem link="/">Burger Builder</NavigationItem>
    </ul>
  );
};

export default navigationItems;
