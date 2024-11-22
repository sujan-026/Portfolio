import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const ProjectsContainer = styled.section`
  min-height: 90vh;
  padding: 80px 2rem 2rem;
  background-color: #f0f4f8;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(animated.div)`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #34495e;
`;

const ProjectDescription = styled.p`
  color: #7f8c8d;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const projects = [
  {
    id: 1,
    title: "Country Capital Quiz",
    description: "An app to test your geographical knowledge.",
    // imageUrl: 'images/project1.png',
    link: "https://world-country-quiz.onrender.com/",
  },
  {
    id: 2,
    title: "Mondrian Online Art Gallery",
    description: "An online gallery showcasing Mondrian art.",
    // imageUrl: '/images/project2.png',
    link: "https://sujan-026.github.io/Mondrian-art/",
  },
  {
    id: 3,
    title: "Drum Kit",
    description: "An online drum kit simulator.",
    // imageUrl: '/images/project3.png',
    link: "https://sujan-026.github.io/drums/",
  },
  {
    id: 4,
    title: "Earth-Moon Simulation",
    description: "A simple simulator of the earth and its moon",
    //  imageUrl: "/images/project4.png",
    link: "https://earth-moon-model.vercel.app/",
  },
  {
    id: 5,
    title: "Pokemon Cards",
    description: "A simple website to browse through all types pokemons",
    //  imageUrl: "/images/project4.png",
    link: "https://pokemon-sigma-weld.vercel.app/",
  },
  {
    id: 6,
    title: "Sphere Sprint",
    description: "2D platformer made in Unity",
    // imageUrl: "/images/project4.png",
    link: "https://fury-026.itch.io/sphere-sprinter",
  },
  {
    id: 7,
    title: "Flappy Bird",
    description: "The iconic Flappy Bird game",
    // imageUrl: "/images/project4.png",
    link: "https://fury-026.itch.io/flappybird",
  },
];

const Projects = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <ProjectsContainer id="projects">
      <Title>My Projects</Title>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} style={fadeIn}>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </ProjectLink>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;