import React from "react";
import {
  Wrapper,
  Title,
  SubTitle,
  ExpContainer,
  ExpTitle,
  TechContainer,
  Slash,
  SingleExpContainer,
} from "./index.style";

const Experience = () => {
  return (
    <Wrapper>
      <Title>Experience:</Title>
      <SubTitle>Full-Stack Software Engineer</SubTitle>
      <ExpContainer>
        <SingleExpContainer>
          <ExpTitle>Programming:</ExpTitle>
          <TechContainer>
            JavaScript <Slash>/</Slash> Python <Slash>/</Slash> Dart{" "}
            <Slash>/</Slash> PHP <Slash>/</Slash>
          </TechContainer>
        </SingleExpContainer>
        <SingleExpContainer>
          <ExpTitle>Front-End:</ExpTitle>
          <TechContainer>
            JavaScript <Slash>/</Slash> ReactJS <Slash>/</Slash>{" "}
            Styled-Components <Slash>/</Slash> GatsbyJS <Slash>/</Slash> CSS{" "}
            <Slash>/</Slash> SCSS <Slash>/</Slash> HTML <Slash>/</Slash>
          </TechContainer>
        </SingleExpContainer>
        <SingleExpContainer>
          <ExpTitle>Back-End:</ExpTitle>
          <TechContainer>
            NodeJS <Slash>/</Slash> ExpressJS <Slash>/</Slash> Python{" "}
            <Slash>/</Slash> RESTAPI <Slash>/</Slash> GraphQL <Slash>/</Slash>{" "}
            Flask <Slash>/</Slash> Django <Slash>/</Slash> Headless-CMS{" "}
            <Slash>/</Slash> Firebase <Slash>/</Slash>
          </TechContainer>
        </SingleExpContainer>
        <SingleExpContainer>
          <ExpTitle>Mobile Apps</ExpTitle>
          <TechContainer>
            Flutter <Slash>/</Slash> React Native <Slash>/</Slash>
          </TechContainer>
        </SingleExpContainer>
        <SingleExpContainer>
          <ExpTitle>Design Tools:</ExpTitle>
          <TechContainer>
            Adobe Photoshop <Slash>/</Slash> Adobe Xd <Slash>/</Slash> Adobe
            Illustrator <Slash>/</Slash> Gimp <Slash>/</Slash> InkScape{" "}
            <Slash>/</Slash> Figma <Slash>/</Slash>
          </TechContainer>
        </SingleExpContainer>
      </ExpContainer>
    </Wrapper>
  );
};

export default Experience;
