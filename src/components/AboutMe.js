import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import App from '../App';

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>A little about myself....</p>
      <div>
        <h6>techStack</h6>
        <TechStackImageContainer>
          <ArrowImage src="/media/downarrow.png" alt="Arrow" />
        </TechStackImageContainer>
        <ImageContainer>
          <LogoImage src="/media/html.png" alt="HTML" />
          <LogoImage src="/media/css.png" alt="CSS" />
          <LogoImage src="/media/javascript.png" alt="JavaScript" />
          <LogoImage src="/media/react.png" alt="React" />
          <LogoImage src="/media/node.png" alt="Node" />
          <LogoImage src="/media/vscode.png" alt="VSCode" />
          <LogoImage src="/media/mongodb.png" alt="MongoDB" />
        </ImageContainer>
      </div>
    </div>
  );
};

const TechStackImageContainer = styled.div`
  margin-top: 100px;
  height: 50px;
  width: 50px;
`;

const ArrowImage = styled.img`
  height: 50px;
  width: 50px;
  background-color: pink;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 500px;
  background-color: white;
`;

const LogoImage = styled.img`
  margin-top: 100px;
  height: 50px;
  width: 50px;
`;

export default AboutMe;
