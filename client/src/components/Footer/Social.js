import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Mail,
} from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  grid-column: 3/4;
  justify-content: flex-end;
  @media (max-width: 800px) {
    grid-row: 2/3;
    grid-column: 2/3;
    justify-content: flex-start;
  }
`;
const Link = styled.a`
  text-decoration: none;
  display: block;
  padding: 5px;
`;
const Social = () => {
  return (
    <Container>
      <Link href="https://www.facebook.com/" target={`_blank`}>
        <Facebook sx={{ color: `hsl(257,69%,47%)`, fontSize: 30 }} />
      </Link>
      <Link href="https://www.facebook.com/" target={`_blank`}>
        <Twitter sx={{ color: `hsl(257,69%,47%)`, fontSize: 30 }} />
      </Link>
      <Link href="https://www.facebook.com/" target={`_blank`}>
        <LinkedIn sx={{ color: `hsl(257,69%,47%)`, fontSize: 30 }} />
      </Link>
      <Link href="https://www.facebook.com/" target={`_blank`}>
        <Instagram sx={{ color: `hsl(257,69%,47%)`, fontSize: 30 }} />
      </Link>
      <Link href="https://www.facebook.com/" target={`_blank`}>
        <Mail sx={{ color: `hsl(257,69%,47%)`, fontSize: 30 }} />
      </Link>
    </Container>
  );
};

export default Social;
