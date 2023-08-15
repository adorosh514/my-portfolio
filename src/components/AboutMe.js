import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import App from '../App';

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>A little about myself....</p>
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
  /* background-color: purple; */
`;

const TechStackHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  /* background-color: green; */
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
  /* background-color: yellow; */
`;

const LogoImage = styled.img`
  display: flex;
  height: 40px;
  width: 40px;
  /* background-color: pink; */
`;

export default AboutMe;
