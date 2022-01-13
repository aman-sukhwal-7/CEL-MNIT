import React from "react";
import styled from "styled-components";
import { Heading, HeadingBlue, SubHeading, SubText } from "../../../UI/index";
import image1 from "./image 1.jpg";
import image2 from "./image 2.jpg";
import Star from "./Vector.svg";
import Comp from "./Vector (1).svg";
import Book from "./Vector (2).svg";

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Info = styled.div`
  padding: 20px 0;
`;
const FlexIcon = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Img = styled.img`
  display: block;
  width: 40%;
  margin-right: 10px;
  @media (max-width: 800px) {
    margin-right: 0px;
    width: 100%;
  }
`;
const ImgSvg = styled.img`
  display: block;
  width: 50px;
  margin-right: 20px;
`;

const AboutHome = () => {
  return (
    <>
      <InfoContainer>
        <Img src={image1} />
        <Info>
          <SubHeading>About</SubHeading>
          <Heading>LEARN AT YOUR OWN PACE</Heading>
          <HeadingBlue>CeL | MNIT JAIPUR</HeadingBlue>
          <SubText>
            The centre for e-Learning (CeL), established at the ICT Centre, MNIT
            Jaipur, aims to impart quality education, in the easiest manner,
            with equitable access to learners across the nation. The main motto
            of CeL is to digitalize learning by conducting seminars, learning
            events, workshops in different fields. The portal will offer video
            lectures (recorded as well as live series), interview experiences of
            placed students, and many more, to enable students to learn at their
            own pace and pursue their interests.
          </SubText>
          <SubText>
            Everyone does not have the same view of the world, and their
            understanding of something may differ dramatically from yours.
            Sometimes you can even create something awesome in your career by
            asking their thoughts or inputs on something you might not even know
            or have heard of. CeL will give you chance to grow, to be open to
            new ideas, new ways of doing things, or new ways of thinking.
          </SubText>
          <SubText>
            Learn Higher also states that meeting new people can offer
            encouragement, solutions to common problems, and advice for how to
            handle challenges. CeL will provide you a great way to meet other
            people in your area with shared interests
          </SubText>
        </Info>
      </InfoContainer>
      <InfoContainer>
        <Info>
          <Heading>Why CeL?</Heading>
          <FlexIcon>
            <ImgSvg src={Star} />
            <div>
              <Heading>Mentor that fits you</Heading>
              <p>
                Good mentors are enthusiastic people, and we have exact that
                team for you. Our team is dedicated and a good mentor is always
                willing to teach what he/she knows and accept the mentee where
                they currently are in their professional development and will
                help you to become better you.
              </p>
            </div>
          </FlexIcon>
          <FlexIcon>
            <ImgSvg src={Comp} />
            <div>
              <Heading>Diversify and extend your reach</Heading>
              <p>
                With our webinars, you can diversify and extend your reach and
                can set a solid foundation for your future with personal and
                professional guidance.
              </p>
            </div>
          </FlexIcon>
          <FlexIcon>
            <ImgSvg src={Book} />
            <div>
              <Heading>Unmatchable experience</Heading>
              <p>
                We provide unmatchable experience, We make connections that set
                you forward. With personalized training and courses from the
                best mentors of top institutes, you get an unparalleled and
                exceptional experience.
              </p>
            </div>
          </FlexIcon>
        </Info>
        <Img src={image2} />
      </InfoContainer>
    </>
  );
};

export default AboutHome;
