import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 80px 2rem 2rem; // Added top padding to account for fixed header
  color: #272727;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillItem = styled.li`
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

function About() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Git'];

  return (
    <AboutContainer id="about">
      <Content>
        <Title>About Me</Title>
        <p>
          I'm a passionate web developer with a keen interest in creating intuitive and efficient web applications. 
          With a strong foundation in both front-end and back-end technologies, I strive to deliver high-quality, 
          scalable solutions that meet and exceed client expectations.
        </p>
        <p>
          My skills include:
        </p>
        <SkillsList>
          {skills.map((skill) => (
            <SkillItem key={skill}>
              {skill}
            </SkillItem>
          ))}
        </SkillsList>
      </Content>
    </AboutContainer>
  );
}

export default About;