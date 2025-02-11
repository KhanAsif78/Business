import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo>
        <Link to="/">⚡Consultancy</Link>
      </Logo>
      <NavLinks isOpen={isOpen}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
      <AuthButtons>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button className="register">Sign Up</button>
        </Link>
      </AuthButtons>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>☰</MenuIcon>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background: rgba(14, 14, 14, 0.9);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: glow 1.5s infinite alternate;

  @keyframes glow {
    0% {
      text-shadow: 0px 0px 10px #6e00ff;
    }
    100% {
      text-shadow: 0px 0px 20px #9c00ff;
    }
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #9c00ff;
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #6e00ff;
    color: white;
    font-size: 1rem;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 0px 15px rgba(156, 0, 255, 0.6);
    }
  }

  .register {
    background: #9c00ff;
  }
`;

const MenuIcon = styled.div`
  font-size: 2rem;
  color: white;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
