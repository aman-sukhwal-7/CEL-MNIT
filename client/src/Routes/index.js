import React from "react";
import { Route } from "react-router-dom";

import Home from "../components/Homepage/Home";
import About from "../components/AboutPage/About";
import Placement from "../components/Placements/Placements";
import Courses from "../components/Courses/Courses";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
// import ForgotPassword from "../components/Auth/ForgotPassword";

const AllRoute = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      {/* <Route path="/forgot-password" exact component={ForgotPassword} /> */}
      <Route path="/mentorship" exact component={Placement} />
      <Route path="/courses" exact component={Courses} />
    </>
  );
};

export default AllRoute;
