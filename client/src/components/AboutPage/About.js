import React from "react";
import styled from "styled-components";
import { Heading, HeadingBlue, SubText } from "../../UI/index";

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
  text-align: center;
`;
const FlexIcon = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
`;

const About = () => {
  return (
    <>
      <InfoContainer>
        <Info>
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
            <div>
              <HeadingBlue>Mentor that fits you</HeadingBlue>
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
            <div>
              <HeadingBlue>Diversify and extend your reach</HeadingBlue>
              <p>
                With our webinars, you can diversify and extend your reach and
                can set a solid foundation for your future with personal and
                professional guidance.
              </p>
            </div>
          </FlexIcon>
          <FlexIcon>
            <div>
              <HeadingBlue>Unmatchable experience</HeadingBlue>
              <p>
                We provide unmatchable experience, We make connections that set
                you forward. With personalized training and courses from the
                best mentors of top institutes, you get an unparalleled and
                exceptional experience.
              </p>
            </div>
          </FlexIcon>
        </Info>
      </InfoContainer>
    </>
  );
};

export default About;
