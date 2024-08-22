import styled, { createGlobalStyle } from 'styled-components';
// import App from '../App';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact.js';
import React, { useRef } from 'react';
import NavBar from './NavBar.js';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const { text } = useTypewriter({
    words: ['Anna'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const aboutme = useRef('');
  const projects = useRef('');
  const contact = useRef('');

  const scrollToRef = (ref) => {
    console.log(ref);
    if (ref.current) {
      console.log('if');
      window.scrollTo({
        top: ref.current.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div>
      <NavBarWrapper>
        <NavBarContainer>
          <NavBarButton onClick={() => scrollToRef(aboutme)}>
            About Me
          </NavBarButton>
          <NavBarButton onClick={() => scrollToRef(projects)}>
            Projects
          </NavBarButton>
          <NavBarButton onClick={() => scrollToRef(contact)}>
            Contact
          </NavBarButton>
        </NavBarContainer>
        <MobileNavBarImageContainer>
          <MobileNavBarImage src="/media/hamburger.png" alt="Hamburger" />
        </MobileNavBarImageContainer>
      </NavBarWrapper>

      <ProfileContainer>
        <BioDiv>
          <div>
            <NameH3>HELLO WORLD</NameH3>
            <NameH1>
              I'm {''}
              <font color="brightpink">Anna Dorosh</font>
              <span style={{ fontWeight: 'bold', color: 'green' }}>{text}</span>
              <span style={{ color: 'red' }}>
                <Cursor cursorStyle="|" />
              </span>
            </NameH1>
          </div>
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
          <HeroSectionImageContainer>
            <LocationPin src="/media/locationpin.png" alt="LocationPin" />
            <Heart src="/media/heart (1).png" alt="Heart" />
          </HeroSectionImageContainer>
          <div ref={aboutme}>
            <AboutMe />
          </div>
        </BioDiv>
        <ProfilePic src="/media/me.png" alt="Profile" />
      </ProfileContainer>
      <div ref={projects}>
        <Projects />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
    </div>
  );
};

const NavBarWrapper = styled.div`
  @media (min-width: 500px) {
    /* background-color: lightgrey; */
    /* opacity: 0.5; */
  }
`;

const NavBarContainer = styled.div`
  display: none;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 35px;
  padding: 15px;
  font-size: 20px;
  width: 100%;
  font-family: cyreal;
  font-weight: bolder;
  text-decoration: none;
  position: fixed;
  top: 0;
  @media (min-width: 500px) {
    display: flex;
    /* background-color: green; */
  }
`;
const NavBarButton = styled.button`
  border-radius: 5px;
  border: 0px;
  background-color: white;
  box-shadow: 2px 2px 5px black;
  width: 75px;
  height: 40px;
  font-family: sans-serif;
  font-weight: bold;
`;

const MobileNavBarImageContainer = styled.div``;

const MobileNavBarImage = styled.img`
  display: flex;
  height: 50px;
  width: 50px;

  @media (min-width: 500px) {
    display: none;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: pink; */
`;

const BioDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* background-color: rebeccapurple; */
  padding-top: 80px;
`;

const NameH3 = styled.h3`
  font-weight: bolder;
  /* padding-bottom: 15px; */
  font-family: sans-serif;
  /* background-color: orange; */
`;
const NameH1 = styled.h1`
  font-weight: bolder;
  font-size: 40px;
  /* font-family: industrial-roman; */
  /* background-color: blue; */
  margin: 5px;
`;

const TechStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 80px;
  /* background-color: yellow; */
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

const ProfilePic = styled.img`
  height: 800px;
  display: flex;
  /* background-color: yellow; */
`;

const p = styled.div`
  font-family: copperplate;
  font-weight: bolder;
`;

const HeroSectionImageContainer = styled.div``;

const LocationPin = styled.img`
  margin-top: 10px;
  height: 30px;
  width: 30px;
`;

const Heart = styled.img`
  margin-top: 10px;
  height: 30px;
  width: 30px;
`;

export default Hero;
