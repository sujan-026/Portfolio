import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  min-height: 50vh;
  padding: 80px 2rem 2rem;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #333;
  font-size: 2rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <Title>Connect With Me</Title>
      <SocialLinks>
        <SocialLink href="https://github.com/sujan-026" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/sujan-p-443745244/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </SocialLink>
        <SocialLink href="mailto:work.sujan26@gmail.com">
          <i className="fas fa-envelope"></i>
        </SocialLink>
      </SocialLinks>
    </ContactContainer>
  );
};

export default Contact;