import styled, { createGlobalStyle } from 'styled-components';
import App from '../App';
import React from 'react';

const Projects = () => {
  return (
    <>
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectsContainer>
        <Placeholder1>
          <ProjectDescription>
            <ProjectNames>TechGear E-Commerce</ProjectNames>

            <a href="http://github.com/jchylton/project-group-e-commerce">
              <CodeLink>Click to view code!</CodeLink>
            </a>

            <ProjectDetails>
              A functional e-commerce website where users can come in and shop
              around for the wearable tech they want. This was a group prject,
              where I collaborated with three other groupmates. My contribution
              was to complete the front-end portion of the landing page, as well
              as create a logo and manage some of the back-end handlers
              including: getItems, getAllItems.
            </ProjectDetails>
          </ProjectDescription>
          <ProjectScreenshot src="/media/ecommerce.png" alt="ECommerce" />
        </Placeholder1>
        <Placeholder3>
          <NyanCatScreenshot src="/media/nyancat.JPG" alt="NyanCat" />
          <ProjectDescription>
            <ProjectNames>Nyan Cat</ProjectNames>
            <a href="https://github.com/adorosh514/project-js-nyan-cat">
              <CodeLink>Click to view code!</CodeLink>
            </a>
            <ProjectDetails>
              This game is called I CAN HAZ CHEEZBURGER?!??. This project was
              designed as a way to showcase my Object Oriented Programming
              skills. In the game, you play as an anthropomorphic cheeseburger.
              The only thing you can do is move left or right with the arrows of
              your keyboard. The goal of the game is to stay alive as long as
              possible by avoiding the Nyan Cats who are raining from the sky
              and trying to haz you. The longer you stay alive, the higher your
              score!
            </ProjectDetails>
          </ProjectDescription>
        </Placeholder3>
        <Placeholder2>
          <ProjectDescription>
            <ProjectNames>Festival Finder</ProjectNames>
            <a href="https://github.com/adorosh514/annas-festival-finder">
              <CodeLink>Click to view code!</CodeLink>
            </a>
            <ProjectDetails>
              My website provides a database of North American based music
              festivals categorized by music genres. It also contains features
              such as auth0 login for users, profiles that can be customized
              once the user has signed up, as well as a 5-star rating system for
              festivals that each user has the ability to add, edit, or delete
              after they’ve attended.
            </ProjectDetails>
          </ProjectDescription>
          <ProjectScreenshot
            src="/media/festivalfinder.png"
            alt="FestivalFinder"
          />
        </Placeholder2>
      </ProjectsContainer>
    </>
  );
};

const ProjectTitle = styled.h1`
  font-weight: bolder;
  font-size: 30px;
  margin: 5px;
  font-family: sans-serif;
`;

const ProjectNames = styled.h2`
  font-weight: bolder;
  font-size: 20px;
  margin: 5px;
  font-family: sans-serif;
  /* background-color: pink; */
`;

const CodeLink = styled.h3`
  /* background-color: purple; */
  font-family: sans-serif;
`;

const ProjectsContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* gap: 10px; */
  /* background-color: green; */

  /* @media (min-width: 500px) {
    display: flex;
    flex-direction: row;
  } */
`;

const Placeholder1 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: center;
  border: 2px solid grey;
  width: 90%;
  border-radius: 5%;
  height: 400px;
  gap: 20px;
  line-height: 1.5;
  align-items: center;
  /* background-color: yellow; */

  /* @media (min-width: 500px) {
    display: flex;
    width: 400px;
  } */
`;

const Placeholder2 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: center;
  border: 2px solid grey;
  width: 90%;
  border-radius: 5%;
  height: 400px;
  gap: 20px;
  line-height: 1.5;
  align-items: center;
  /* background-color: red; */

  /* @media (min-width: 500px) {
    display: flex;
    width: 400px;
  } */
`;
const Placeholder3 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: center;
  border: 2px solid grey;
  width: 90%;
  border-radius: 5%;
  height: 400px;
  gap: 20px;
  line-height: 1.5;
  align-items: center;
  /* background-color: rebeccapurple; */

  /* @media (min-width: 500px) {
    display: flex;
    width: 400px;
  } */
`;

const ProjectDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: brown; */
`;

const ProjectDetails = styled.p`
  font-weight: bold;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  /* background-color: teal; */
  padding-top: 10px;
  font-family: sans-serif;
`;

const ProjectScreenshot = styled.img`
  display: flex;
  align-items: centre;
  justify-content: center;
  width: 600px;
  object-fit: fill;
  border-radius: 10px;

  /* @media (min-width: 500px) {
    display: flex;
    flex-direction: row;
    width: 90%;
  } */
`;

const NyanCatScreenshot = styled.img`
  display: flex;
  align-items: centre;
  justify-content: center;
  width: 450px;
  object-fit: fill;
  border-radius: 10px;

  /* @media (min-width: 500px) {
    display: flex;
    flex-direction: row;
    width: 90%;
  } */
`;

export default Projects;
