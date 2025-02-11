import styled from "styled-components";

const Button = styled.button`
  background: linear-gradient(135deg, #6e00ff, #9c00ff);
  color: white;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px rgba(156, 0, 255, 0.6);
  }
`;

export default Button;
