import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <h2>⚡Consultancy</h2>
        <p>Providing Expert Solutions for Your Business Growth.</p>
        <SocialLinks>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </SocialLinks>
      </FooterContent>

      <FooterLinks>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms of Service</a>
        <a href="/">Support</a>
      </FooterLinks>

      <Copyright>
        © {new Date().getFullYear()} Consultancy. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #0d0d0d;
  color: white;
  text-align: center;
  padding: 40px 20px;
  margin-top: 50px;
  border-top: 2px solid #6e00ff;
`;

const FooterContent = styled.div`
  h2 {
    font-size: 2rem;
    color: #9c00ff;
  }

  p {
    font-size: 1.1rem;
    color: #b3b3b3;
    margin: 10px 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 1.5rem;
  margin-top: 10px;

  svg {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
      color: #9c00ff;
    }
  }
`;

const FooterLinks = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      color: #9c00ff;
    }
  }
`;

const Copyright = styled.p`
  margin-top: 20px;
  font-size: 0.9rem;
  color: #b3b3b3;
`;
