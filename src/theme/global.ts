import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
  }
    
  @media (max-width: 720px) {
    html {
        font-size: 87.5%;
    }
  }

  body, .ant-layout-content {
    min-height: 100vh;
    background: #fafafa;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
