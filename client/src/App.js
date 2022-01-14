import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import AllRoute from "./Routes";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./UI/Placement.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={AllRoute} />
      </Switch>
    </Router>
  );
}

export default App;
