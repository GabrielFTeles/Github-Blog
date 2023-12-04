import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    scrollbar-gutter: stable;
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

  /* ===== Scrollbar CSS ===== */

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme["blue-300"]};
    border-radius: 15px;
  }
`;
