import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue-900: #24418B;
    --blue-500: #2B60E4;
    --blue-300: #557FEB;
    --blue-100: #C6D5FC;

    --green-500: #108B62;
    --green-300: #63EEB4;
    --green-100: #C1FFE6;

    --orange-500: #E46E00;
    --orange-300: #FF9C62;
    --orange-100: #FFD8C2;

    --red-500: #D14545;
    --red-300: #EE6363;
    --red-100: #FFCBCB;

    --gray-700: #0D0D0D;
    --gray-500: #313131;
    --gray-400: #4D4D4D;
    --gray-300: #CCCCCC;
    --gray-200: #E8E9F0;

    --text-tile: #212533;
    --text-body: #767985;

    --background: #F0F2F5;
    --overlay: #0E0A14EF;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
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
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 900;
  }

  button {
    cursor: pointer;
  }

  input[type="file"] {
    display: none;
  }
`;
