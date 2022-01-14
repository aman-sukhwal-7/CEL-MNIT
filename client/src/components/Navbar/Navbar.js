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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const listItemClickHandler = () => {
    console.log(isOpen);
    setIsOpen(false);
  };
  console.log(isOpen);
  return (
    <>
      <NavbarContainer>
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
              <NavbarListItem>PTCell+</NavbarListItem>
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
