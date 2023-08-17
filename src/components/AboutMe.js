import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import App from '../App';

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>I'm a webDeveloper born and raised in Victoria, BC,</p>
      <p>and currently residing in Montreal, QC!</p>
      <p>I consider myself to be very vibrant, and outgoing.</p>
      <p>When I'm offline I live an active lifestyle,</p>
      <p>with some of my interests including:</p>
      <p>travel, reading, horseback riding,</p>
      <p>snowboarding, music and the arts.</p>
      <p>I have been honing my skills in</p>
      <p>HTML, CSS, Javascript, and React,</p>
      <p>and learning how to build beautiful, functional websites.</p>
      <div>
        <TechStackWrapper>
          <TechStackHeaderContainer>
            <h6>techStack</h6>
            <ArrowImage src="/media/htmltag.png" alt="HTMLTag" />
          </TechStackHeaderContainer>
          <ImageContainer>
            <LogoImage src="/media/html.png" alt="HTML" />
            <LogoImage src="/media/css.png" alt="CSS" />
            <LogoImage src="/media/javascript.png" alt="JavaScript" />
            <LogoImage src="/media/react.png" alt="React" />
            <LogoImage src="/media/node.png" alt="Node" />
            <LogoImage src="/media/vscode.png" alt="VSCode" />
            <LogoImage src="/media/mongodb.png" alt="MongoDB" />
          </ImageContainer>
        </TechStackWrapper>
      </div>
    </div>
  );
};

const TechStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const TechStackHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const ArrowImage = styled.img`
  display: flex;
  height: 30px;
  width: 30px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  display: flex;
  height: 40px;
  width: 40px;
`;

export default AboutMe;
