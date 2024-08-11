// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

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
    </HomeContainer>
  );
};

export default Home;