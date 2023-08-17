import styled, { createGlobalStyle } from 'styled-components';
import App from '../App';
import React from 'react';

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <ProjectsContainer>
        <Placeholder>
          <h1>Nyan Cat</h1>
          <GameScreenshot src="/media/nyancat.JPG" alt="NyanCat" />
        </Placeholder>
        <Placeholder>
          <h1>Cookier Clicker</h1>
          <GameScreenshot src="/media/cookieclicker.JPG" alt="NyanCat" />
        </Placeholder>
      </ProjectsContainer>
    </>
  );
};

const ProjectsContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: row;
  }
`;

const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  border: 2px solid grey;
  width: 90%;
  border-radius: 5%;
  height: 400px;
  gap: 20px;
  align-items: center;

  @media (min-width: 500px) {
    display: flex;
    width: 400px;
  }
`;

const GameScreenshot = styled.img`
  display: flex;
  align-items: centre;
  justify-content: center;
  width: 90%;
  height: 80%;
  object-fit: fill;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: row;
    width: 90%;
  }
`;

export default Projects;
