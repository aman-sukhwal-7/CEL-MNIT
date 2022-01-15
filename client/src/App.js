import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import Navbar from "./components/Navbar/Navbar";
import AllRoute from "./Routes";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./UI/Placement.css";

function App() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });
  return (
    <animated.div style={props}>
      <Router>
        <Navbar />
        <Switch>
          <Route component={AllRoute} />
        </Switch>
      </Router>
    </animated.div>
  );
}

export default App;
