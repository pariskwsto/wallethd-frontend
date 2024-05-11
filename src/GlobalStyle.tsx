import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --text-color: #18212f;
    --bg-color: #DEE3ED;
    --border-color: #DEE3ED;

    --sidebar-width: 372px;
    --sidebar-bg-color: #f5f7f9;
    --sidebar-section-bg-color: #f5f7f9;
    
    --header-height: 90px;
    --header-bg-color: #fff;

    --main-content-bg-color: #fff;

    --page-bg-color: #fff;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: var(--color);
    background-color: var(--bg-color);
    font-family: "Helvetica", sans-serif;
  }
`;
