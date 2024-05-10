import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    &, &.dark-mode {
      --color-grey-0: #18212f;
      --color-grey-50: #111827;
      --color-grey-100: #1f2937;
      --color-grey-200: #374151;
      --color-grey-300: #4b5563;
      --color-grey-400: #6b7280;
      --color-grey-500: #9ca3af;
      --color-grey-600: #d1d5db;
      --color-grey-700: #e5e7eb;
      --color-grey-800: #f3f4f6;
      --color-grey-900: #f9fafb;

      --color: var(--color-grey-900);
      --bg-color: var(--color-grey-200);
      --section-color: var(--color-grey-0);
    }

    &.light-mode{}
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
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;
