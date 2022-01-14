import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./UI/Placement.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Homepage/Home";
import About from "./components/AboutPage/About";
import Placement from "./components/Placements/Placements";
import Courses from "./components/Courses/Courses";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/signup" exact component={Register} />
        <Route path="/signin" exact component={Login} />
        <Route path="/ptcell" exact component={Placement} />
        <Route path="/courses" exact component={Courses} />
      </Switch>
    </Router>
  );
}

export default App;
