import React from "react";
import styled from "styled-components";
import Social from "./Social";

const Container = styled.div`
  background-color: hsla(258, 69%, 47%, 0.08);
  display: grid;
  grid-template-columns: 1rem 1fr 1fr 1rem;
  padding: 10px;
  @media (max-width: 800px) {
    grid-template-rows: 1fr 1fr;
  }
`;
const Copyright = styled.p`
  grid-column: 2/3;
  @media (max-width: 800px) {
    grid-row: 1/2;
    grid-column: 2/4;
  }
`;

const FollowUs = () => {
  return (
    <Container>
      <Copyright>
        © Copyright | 2020 cel Pvt. Ltd. | All Rights Reserved.
      </Copyright>
      <Social />
    </Container>
  );
};

export default FollowUs;
