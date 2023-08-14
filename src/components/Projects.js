import styled, { createGlobalStyle } from 'styled-components';
import App from '../App';
import React from 'react';

const Projects = () => {
  return (
    <>
      <h2>Projects I have completed</h2>
      <ProjectsContainer>
        <Placeholder>Project 1</Placeholder>
        <Placeholder>Project 2</Placeholder>
      </ProjectsContainer>
    </>
  );
};

const ProjectsContainer = styled.div`
  background-color: purple;
  display: flex;
  padding: 10px;
  margin: 10px;
  align-content: center;
  justify-content: center;
`;

const Placeholder = styled.div`
  background-color: pink;
  display: flex;
  padding: 50px;
  margin: 50px;
  align-content: center;
  justify-content: flex-start;
  border: 2px solid grey;
  width: 500px;
  height: 500px;
  border-radius: 5%;
`;

export default Projects;
