import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LogoImg from "./CEL logo (1) 1.jpg";
import {
  NavbarListContainer,
  NavbarListItem,
  NavbarContainer,
  Brand,
  Icon,
  Menu,
  MenuLabel,
} from "./NavbarStyles";
import { Button } from "../../UI/index";
import { useSpring } from "react-spring";
import styled from "styled-components";

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const Navbar = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  const [isOpen, setIsOpen] = useState(false);

  const listItemClickHandler = () => {
    console.log(isOpen);
    setIsOpen(false);
  };
  console.log(isOpen);

  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const toggling = () => setIsOpenDropDown(!isOpenDropDown);
  return (
    <>
      <NavbarContainer style={props}>
        <Brand className="brand">
          <img src={LogoImg} alt="logo" />
        </Brand>
        <Menu clicked={isOpen}>
          <NavbarListContainer>
            <Link to="/" onClick={listItemClickHandler}>
              <NavbarListItem>Home</NavbarListItem>
            </Link>
            <Link to="/about" onClick={listItemClickHandler}>
              <NavbarListItem>About</NavbarListItem>
            </Link>
            <Link to="/skills" onClick={listItemClickHandler}>
              <NavbarListItem>Skills</NavbarListItem>
            </Link>
            <Link to="/contact" onClick={listItemClickHandler}>
              <NavbarListItem>Contact</NavbarListItem>
            </Link>
            <Link to="/ptcell" onClick={listItemClickHandler}>
              <NavbarListItem>
                PTCell+
                {isOpenDropDown && (
                  <DropDownListContainer>
                    <DropDownList>
                      <ListItem>Mangoes</ListItem>
                      <ListItem>Apples</ListItem>
                      <ListItem>Oranges</ListItem>
                    </DropDownList>
                  </DropDownListContainer>
                )}
              </NavbarListItem>
            </Link>
          </NavbarListContainer>
          <Button>
            <Link to="/register" onClick={listItemClickHandler}>
              Join Now
            </Link>
          </Button>
        </Menu>
        <MenuLabel
          htmlFor="navi-toggle"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Icon clicked={isOpen}>&nbsp;</Icon>
        </MenuLabel>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
