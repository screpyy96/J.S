import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(prevState => !prevState);
    };
  
    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };

  return (
    <NavBarContainer>
      <Logo>
        <Link href="/">
         J.S Painting | London
        </Link>
      </Logo>
      <DesktopNavLinks>
        <NavLink>
          <Link href="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link href="/about">About</Link>
        </NavLink>
        <NavLink>
          <Link href="/contact">Contact</Link>
        </NavLink>
        {/* Add more NavLink components for other links */}
      </DesktopNavLinks>
      <MobileMenuIcon onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </MobileMenuIcon>
      <NavLinks isMobileMenuOpen={isMobileMenuOpen}>
        {/* Close button for mobile menu */}
        {isMobileMenuOpen && (
          <CloseButton onClick={closeMobileMenu}>
            <X size={24} />
          </CloseButton>
        )}
       <NavLink>
          <Link href="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link href="/about">About</Link>
        </NavLink>
        <NavLink>
          <Link href="/contact">Contact</Link>
        </NavLink>
        {/* Add more NavLink components for other links */}
      </NavLinks>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #333;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;

  a {
    color: white;
    text-decoration: none;
  }
`;



const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    order: 2;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #333;
  transition: transform 0.3s ease-in-out;
  transform: translateY(${props => (props.isMobileMenuOpen ? '0' : '-100%')});
//   z-index: 999;

  a {
    display: block;
    padding: 20px;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #555;
    }
  }
`;

const DesktopNavLinks = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: white;
`;

const NavLink = styled.div`
  margin: 0 15px;
  font-size: 1.1rem;
  position: relative;
//   z-index: 999;

  a {
    color: white;
    text-decoration: none;
    padding: 10px 0;
    transition: all 0.3s ease;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: white;
      transition: all 0.3s ease;
    }

    &:hover:before {
      width: 100%;
      left: 0;
    }

    &:hover {
      color: #ffd700;
    }
  }
`;


export default Navbar;
