import React from "react";
import PlacementList from "./PlacementList";
import SearchInput from "./SearchInput";
import { useSpring, animated } from "react-spring";

const Placements = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });
  return (
    <animated.div className="placement-section" style={props}>
      <div className="placement-subsection">
        <SearchInput />
        <div>
          <button className="add-btn">Add Exp</button>
          <button className="guide-btn">Guidelines</button>
        </div>
      </div>
      <div>
        <PlacementList />
      </div>
    </animated.div>
  );
};

export default Placements;
