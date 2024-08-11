// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const MenuItems = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const MenuItem = styled.li`
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const MenuLink = styled(Link)`
  color: #333;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>Sujan P</Logo>
        <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </HamburgerButton>
        <MenuItems menuOpen={menuOpen}>
          <MenuItem>
            <MenuLink to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              Home
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              About
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="projects" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              Projects
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              Contact
            </MenuLink>
          </MenuItem>
        </MenuItems>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;