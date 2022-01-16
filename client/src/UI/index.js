import styled from "styled-components";
import LogoImg from "../components/Navbar/CEL logo (1) 1.jpg";

export const Heading = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 50px;
  color: #000000;
`;

export const SubHeading = styled.h2`
  color: #b6b2bf;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
`;

export const HeadingBlue = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #5725cc;
`;

export const SubText = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 19px;
  color: #767373;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ContainerPadding = styled.div`
  padding: 20px;
  background: ${(props) => (props.grey ? "#f6f9fa" : "white")};
`;
export const TextCenter = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: hsl(257, 69%, 47%);
  border: none;
  border-radius: 5px;
  opacity: 1;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonOutline = styled.button`
  padding: 10px;
  border-color: hsl(257, 69%, 47%);
  background-color: white;
  border-radius: 5px;
  color: hsl(258, 69%, 47%, 1);
  cursor: pointer;
`;

export const Logo = styled.div`
  background-image: url(${LogoImg});
  width: 100px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ListContainer = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
`;
