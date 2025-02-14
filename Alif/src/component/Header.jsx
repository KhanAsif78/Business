import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

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
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background: linear-gradient(
    90deg,
    rgba(94, 94, 252, 1) 0%,
    rgba(14, 14, 14, 0.9) 100%
  );
  backdrop-filter: blur(10px);
  top: 0;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

const Logo = styled.div`
  font-size: 1.9rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: glow 1.5s infinite alternate;

  @keyframes glow {
    0% {
      text-shadow: 0px 0px 15px #6e00ff;
    }
    100% {
      text-shadow: 0px 0px 25px #9c00ff;
    }
  }

  a {
    color: white;
    text-decoration: none;
    font-family: "Arial", sans-serif;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    font-family: "Arial", sans-serif;
    transition: color 0.3s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
      color: #9c00ff;
      transform: scale(1.1);
    }
  }

  /* Mobile menu styling */
  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    background-color: rgba(14, 14, 14, 0.9);
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 12px;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #6e00ff;
    color: white;
    font-size: 1rem;
    font-family: "Arial", sans-serif;
    transition: transform 0.3s ease-in-out, background 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      background: #9c00ff;
      box-shadow: 0px 0px 15px rgba(156, 0, 255, 0.6);
    }
  }

  .register {
    background: #9c00ff;
  }
`;

const MenuIcon = styled.div`
  font-size: 2.5rem;
  color: white;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: rotate(90deg);
    }
  }
`;
