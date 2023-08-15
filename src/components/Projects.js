import styled, { createGlobalStyle } from 'styled-components';
import App from '../App';
import React from 'react';

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <ProjectsContainer>
        <Placeholder>Project 1</Placeholder>
        <Placeholder>Project 2</Placeholder>
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
  background-color: pink;
  display: flex;
  padding: 50px;
  /* margin: 50px; */
  /* align-content: center; */
  justify-content: center;
  border: 2px solid grey;
  width: 60%;
  /* height: 500px; */
  border-radius: 5%;
`;

export default Projects;
