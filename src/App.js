// src/App.js
// "homepage": "https://<your-github-username>.github.io/portfolio", 
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f5f5f5;
`;

const ContentContainer = styled(animated.div)`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const contentProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <Router>
      <AppContainer>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ContentContainer style={contentProps}>
          <Home />
          <About />
          <Projects />
          <Contact />
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;