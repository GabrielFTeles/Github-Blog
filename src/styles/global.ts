import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme["BACKGROUND-900"]};
  }

  button {
    cursor: pointer;
  }

  body, input, button, textarea {
    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme["gray-100"]};
  }
`;
