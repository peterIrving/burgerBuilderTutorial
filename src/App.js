import React, { Component } from "react";
import Layout from "./components/Layout/Layout.js";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder.js";
import Toolbar from "./components/Navigation/Toolbar/Toolbar.js";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer.js";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          {/* < Toolbar></Toolbar>
          <SideDrawer /> */}
          <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
