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
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Python', 'Git', 'GitHub', 'MYSQL', 'PostgresSql', 'C/C++', 'Blender', 'Unity',];

  return (
    <AboutContainer id="about">
      <Content>
        <Title>About Me</Title>
        <p>
          Hello! I’m Sujan P, a passionate Computer Science student at Dr. Ambedkar Institute Of Technology, currently in my second year. I have a keen interest in full-stack development and am always eager to learn new technologies and enhance my skills. <br></br>
          <br></br>
          With experience in creating dynamic web applications using the MERN stack, I enjoy turning ideas into functional and user-friendly projects. I’ve also explored various domains, including AI/ML, and am working on exciting projects, like building a custom flight computer for a rocket and developing a simulation game based on stock trading. <br></br>
          <br></br>
          In addition to my technical pursuits, I enjoy collaborating with my peers on innovative solutions and participating in hackathons to challenge myself and expand my knowledge. When I’m not coding, you’ll find me diving into the latest anime, playing video games, or keeping up with cricket.
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