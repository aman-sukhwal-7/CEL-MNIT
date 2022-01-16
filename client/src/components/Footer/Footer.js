import React from "react";
import styled from "styled-components";
import { Heading, Button, ListContainer, ListItem } from "../../UI";
import logo from "../Navbar/CEL logo (1) 1.jpg";
import Social from "./Social";
import { Phone } from "@mui/icons-material";
import FollowUs from "./FollowUs";

const FooterContainer = styled.div`
  background-color: hsla(258, 69%, 47%, 0.08);
  display: grid;
  grid-template-columns: 1rem 1fr 1fr 1fr 1rem;
  justify-content: space-between;
  padding: 10px;
  @media (max-width: 800px) {
    grid-template-rows: 2fr 1fr 1fr;
  }
`;

const FooterInfo = styled.div`
  padding: 10px 0;
  margin: 10px 0;
  grid-column: 2/3;
  @media (max-width: 800px) {
    grid-row: 1/2;
    grid-column: 2/5;
  }
`;

const FooterCondition = styled.div`
  grid-column: 4/5;
  @media (max-width: 800px) {
    grid-row: 2/3;
    grid-column: 2/3;
  }
`;

const FooterMenu = styled.div`
  grid-column: 3/4;
  @media (max-width: 800px) {
    grid-row: 3/4;
    grid-column: 2/3;
  }
`;
const Info = styled.p`
  margin-bottom: 15px;
`;

const ListContainerFooter = styled(ListContainer)`
  padding: 10px;
  @media (max-width: 800px) {
    margin-top: 5px;
    padding: 0;
  }
`;
const ListItemFooter = styled(ListItem)`
  margin: 10px;
  @media (max-width: 800px) {
    margin: 0;
    margin-top: 5px;
    padding: 0;
  }
`;
const Footer = (props) => {
  return (
    <>
      <FooterContainer>
        <FooterInfo>
          <Info>
            Cel enables students in being capable to develop production grade
            application by availing full stack development, Soft skills,
            Analytics and project management skills to get a core software job
            in the Industry.
          </Info>
          <Button style={{ marginBottom: "15px" }}>Apply Now</Button>
          <img src={logo} alt="Footer" style={{ display: "block" }} />
        </FooterInfo>
        <FooterMenu>
          <ListContainerFooter>
            <ListItemFooter>Partner</ListItemFooter>
            <ListItemFooter>Projects</ListItemFooter>
            <ListItemFooter>FAQ</ListItemFooter>
            <ListItemFooter>Contact Us</ListItemFooter>
            <ListItemFooter>Media</ListItemFooter>
          </ListContainerFooter>
        </FooterMenu>
        <FooterCondition>
          <ListContainerFooter>
            <ListItemFooter>Terms</ListItemFooter>
            <ListItemFooter>Privacy Policy</ListItemFooter>
            <ListItemFooter>Sitemap</ListItemFooter>
            <ListItemFooter>Popular Courese</ListItemFooter>
          </ListContainerFooter>
        </FooterCondition>
      </FooterContainer>
      <hr />
      <FollowUs />
    </>
  );
};

export default Footer;
