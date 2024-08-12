// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import resumePDF from './SujanP.pdf'; 

const HomeContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled(animated.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled(animated.p)`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
`;


const DownloadButton = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  const titleProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  const subtitleProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000, delay: 500 },
  });

  return (
    <HomeContainer id="home">
      <Title style={titleProps}>Welcome to My Portfolio</Title>
      <Subtitle style={subtitleProps}>I'm a passionate web developer creating amazing experiences</Subtitle>
      <DownloadButton href={resumePDF} download="SujanP.pdf">
        Download Resume
      </DownloadButton>
    </HomeContainer>
  );
};

export default Home;