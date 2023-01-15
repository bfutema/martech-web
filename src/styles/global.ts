import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: #fdfcff;

    color: #000000;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;

    font-size: 1rem;

    overflow: hidden;
  }

  body > iframe {
    z-index: -1 !important;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;

    cursor: not-allowed;
  }

  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: rgb(235, 239, 242);
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgb(43,101,156);

    &:hover {
      background-color: rgb(43,101,156);
    }
  }
`;
