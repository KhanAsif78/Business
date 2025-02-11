import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    background: #0d0d0d;  /* Black Background */
    color: #ffffff;  /* White Text */
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: linear-gradient(135deg, #6e00ff, #9c00ff);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px rgba(156, 0, 255, 0.6);
  }

  input {
    padding: 12px;
    border: 2px solid #6e00ff;
    border-radius: 8px;
    background: #1a1a1a;
    color: white;
    outline: none;
    transition: 0.3s ease-in-out;
  }

  input:focus {
    border-color: #9c00ff;
    box-shadow: 0px 0px 10px rgba(156, 0, 255, 0.5);
  }
`;

export default GlobalStyles;
