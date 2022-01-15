import React from "react";
import styled from "styled-components";
import {
  Heading,
  HeadingBlue,
  SubHeading,
  ContainerPadding,
  TextCenter,
} from "../../../UI";
import { School } from "@mui/icons-material";

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 730px) {
    align-items: center;
    flex-direction: column;
  }
`;

const FlexColumn = styled.div`
  min-width: 250px;
  display: flex;
  width: 250px;
  flex-direction: column;
  margin: 20px;
  background-image: linear-gradient(
    to bottom,
    #fafafa,
    #f9f8fa,
    #f7f7fb,
    #f5f5fb,
    #f3f4fc
  );
  align-items: center;
  padding: 20px;
  justify-content: space-evenly;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px hsla(0, 0%, 0%, 0.25);
  @media (max-width: 730px) {
    width: 300px;
  }
`;

const Skills = () => {
  return (
    <>
      <ContainerPadding grey>
        <TextCenter>
          <SubHeading>What you gain</SubHeading>
          <Heading>Learn at your own pace</Heading>
          <HeadingBlue>#Develop Skills</HeadingBlue>
        </TextCenter>
        <SkillsContainer>
          <FlexColumn>
            <School sx={{ color: `hsl(257,69%,47%)`, fontSize: 80 }} />
            <h3>Networking</h3>
            <p>
              Exchanging information on challenges, experiences, and goals is a
              key benefit of networking because it allows students to gain new
              insights that they may not have otherwise thought of.
            </p>
          </FlexColumn>
          <FlexColumn>
            <School sx={{ color: `hsl(257,69%,47%)`, fontSize: 80 }} />
            <h3>Communication</h3>
            <h3>skill</h3>
            <p>
              Students will learn presentation skills, negotiation skills,
              influencing skills, and teamwork building.
            </p>
          </FlexColumn>
          <FlexColumn>
            <School sx={{ color: `hsl(257,69%,47%)`, fontSize: 80 }} />
            <h3>Website</h3>
            <h3> development</h3>
            <p>
              Students will learn how to design and execute parts in addition to
              the front-end and back-end knowledge.
            </p>
          </FlexColumn>
          <FlexColumn>
            <School sx={{ color: `hsl(257,69%,47%)`, fontSize: 80 }} />
            <h3>Creative</h3>
            <h3>Thinking</h3>
            <p>
              Allows students a way of looking at problems or situations from a
              fresh perspective that suggests unorthodox solutions (which may
              look unsettling at first).
            </p>
          </FlexColumn>
          <FlexColumn>
            <School sx={{ color: `hsl(257,69%,47%)`, fontSize: 80 }} />
            <h3>Video Editing</h3>
            <p>
              Will introduce students to all the required tools and how to use
              them in a fruitful manner.
            </p>
          </FlexColumn>
          <FlexColumn>
            <School sx={{ color: `hsl(257,69%,47%)`, fontSize: 80 }} />
            <h3>Management</h3>
            <p>
              Students will learn planning, controlling, leading, organizing,
              flexibility and resilience.
            </p>
          </FlexColumn>
          <FlexColumn>
            <School sx={{ color: `hsl(257,69%,47%)`, fontSize: 80 }} />
            <h3>Leadership</h3>
            <h3>qualities</h3>
            <p>
              Students will learn leadership traits that include honesty,
              confidence, commitment, and creativity.
            </p>
          </FlexColumn>
          <FlexColumn>
            <School sx={{ color: `hsl(257,69%,47%)`, fontSize: 80 }} />
            <h3>Personal</h3>
            <h3>branding</h3>
            <p>
              Students will learn how to become better at articulating and
              expressing what they do, what makes you different, and what you
              have to offer.
            </p>
          </FlexColumn>
        </SkillsContainer>
      </ContainerPadding>
    </>
  );
};

export default Skills;
