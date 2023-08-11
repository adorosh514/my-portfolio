import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import App from '../App';

const Hero = () => {
  return (
    <div>
      <ProfileImageContainer>
        <ProfilePic src="/media/profilepic.JPG" alt="Profile" />
      </ProfileImageContainer>
      <div>
        <h6>Hi, I'm Anna Dorosh</h6>
        <p>a passionate fullStack webDeveloper based in Montreal, Canada!</p>
      </div>
      <HeroSectionImageContainer>
        <LocationPin src="/media/locationpin.png" alt="LocationPin" />
        <Heart src="/media/heart (1).png" alt="Heart" />
      </HeroSectionImageContainer>
    </div>
  );
};

const ProfileImageContainer = styled.div``;

const ProfilePic = styled.img`
  width: 20%;
  height: 20%;
  -webkit-clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );
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
