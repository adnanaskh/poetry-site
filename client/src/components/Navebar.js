import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--cream);
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none; // You can add a hamburger menu logic here if you want
  }
`;

const NavItem = styled.li`
  font-size: 1rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Adnan's Poetry</Logo>
      <NavLinks>
        <NavItem><Link to="/poetry">Poetry</Link></NavItem>
        <NavItem><Link to="/contact">Contact</Link></NavItem>
        <NavItem><Link to="/admin">Admin</Link></NavItem>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;