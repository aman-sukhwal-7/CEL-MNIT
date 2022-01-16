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

const DropDownList = styled("ul")`
  position: relative;
  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;
  margin-top: 5px;
  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
  @media only screen and (min-width: 800px) {
    padding: 0;
    margin: 0;
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 5px;
    position: absolute;
    top: 30px;
    padding-top: 10px;
  }
`;

const DropDownListItem = styled("li")`
  list-style: none;
  cursor: pointer;
  margin-bottom: 5px;
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
    setIsOpenDropDown(false);
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
            <Link to="/courses" onClick={listItemClickHandler}>
              <NavbarListItem>Courses</NavbarListItem>
            </Link>
            <Link to="/blog" onClick={listItemClickHandler}>
              <NavbarListItem>Blog</NavbarListItem>
            </Link>
            <Link to="/contact" onClick={listItemClickHandler}>
              <NavbarListItem>Contact</NavbarListItem>
            </Link>
            <NavbarListItem>
              <span onClick={toggling}>PTCell+</span>
              {isOpenDropDown && (
                <DropDownList>
                  <Link to="/mentorship">
                    <DropDownListItem onClick={listItemClickHandler}>
                      Mentorship
                    </DropDownListItem>
                  </Link>
                  <Link to="/vlog">
                    <DropDownListItem onClick={listItemClickHandler}>
                      Vlog
                    </DropDownListItem>
                  </Link>
                </DropDownList>
              )}
            </NavbarListItem>
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
