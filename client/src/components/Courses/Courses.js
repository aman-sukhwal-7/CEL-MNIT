import React from "react";
import CourseCard from "./CourseCard";
import "./Courses.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import coltImg from "./assets/colt.jpeg";
import joseImg from "./assets/jose.jpeg";
import courseOne from "./assets/course-one.jpeg";
import courseTwo from "./assets/course-two.jpeg";

import { useSpring, animated } from "react-spring";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1190 },
    items: 4,
  },
  laptop: {
    breakpoint: { max: 1190, min: 891 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 891, min: 621 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 620, min: 0 },
    items: 1,
  },
};

const Courses = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  return (
    <animated.div style={props}>
      <div class="hero-image"></div>
      <div className="courses-container">
        <h1>A broad selection of courses</h1>
        <p className="courses-description">
          Choose from 155,000 online video courses with new additions published
          every month
        </p>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
          className="courses-card-container"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((card) => (
            <CourseCard
              imgName={courseOne}
              authorName="Colt Steele"
              authorImg={coltImg}
            />
          ))}
        </Carousel>
      </div>
      <div className="courses-container">
        <h1>
          All courses by <span className="highlight">"MNIT Jaipur"</span>
        </h1>
        <div className="courses-card-container">
          {[1, 2, 3, 4].map((card) => (
            <CourseCard
              imgName={courseTwo}
              authorName="Jose Portilla"
              authorImg={joseImg}
            />
          ))}
        </div>
      </div>
    </animated.div>
  );
};

export default Courses;
