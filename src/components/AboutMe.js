import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import App from '../App';

const AboutMe = () => {
  return (
    <AboutMeContainer>
      I'm an enthusiastic fullStack webDeveloper from Montreal, QC, eager to
      make a difference with my coding skills. Although I'm relatively new to
      the tech landscape, my passion for coding and the thrill of
      problem-solving drive me. Proficient in HTML, CSS, React.js, JavaScript,
      Node.js, Express.js, and MongoDB, I'm committed to continuous learning and
      embracing emerging technologies. Each project is an opportunity to
      demonstrate dedication and deliver quality work. Effective communication
      and a client-centric approach are my priorities, ensuring your vision is
      always at the forefront.
    </AboutMeContainer>
  );
};

const AboutMeContainer = styled.p`
  font-weight: bold;
  padding-bottom: 15px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  padding-top: 5px;
`;

export default AboutMe;
