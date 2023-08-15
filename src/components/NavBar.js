import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import App from '../App';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavBarContainer>
        <Link to="/">Home</Link>
        <Link to="/About">About Me</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contact">Contact</Link>
      </NavBarContainer>
      <MobileNavBarImageContainer>
        <MobileNavBarImage src="/media/hamburger.png" alt="Hamburger" />
      </MobileNavBarImageContainer>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.div`
  background-color: green;

  @media (min-width: 500px) {
    background-color: rebeccapurple;
  }
`;

const NavBarContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  /* position: fixed; */
  /* margin: 0px; */
  padding: 15px;
  font-size: 20px;
  font-family: cyreal;
  font-weight: bolder;
  text-decoration: none;
  /* color: black; */
  /* row-gap:  */
  @media (min-width: 500px) {
    display: flex;
  }
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

export default NavBar;
