import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    &, &.light-mode {
      /* grey */
      --color-grey-0: #fff;
      --color-grey-50: #f5f7f9;
      --color-grey-100: #f3f4f6;
      --color-grey-200: #DEE3ED;
      --color-grey-300: #d1d5db;
      --color-grey-400: #9DA4B0;
      --color-grey-500: #6b7280;
      --color-grey-600: #4b5563;
      --color-grey-700: #374151;
      --color-grey-800: #1f2937;
      --color-grey-900: #111827;
      
      /* navy blue */
      --color-brand-100: #6D99BA;
      --color-brand-200: #5286A7;
      --color-brand-300: #377393;
      --color-brand-400: #1C5B7F;
      --color-brand-500: #00486C;
      --color-brand-900: #093145;
      
      /* green */
      --color-green-100: #dcfce7;
      --color-green-700: #15803d;
      
      /* red */
      --color-red-100: #fee2e2;
      --color-red-700: #b91c1c;
      --color-red-800: #991b1b;
 
      /* yellow */
      --color-yellow-100: #fffbea;
      --color-yellow-700: #b1550e;
      
      /* shadows */
      --shadow-sm: 0 1px 2px rgba(9, 49, 69, 0.04);
      --shadow-md: 0px 0.6rem 2.4rem rgba(9, 49, 69, 0.06);
      --shadow-md-alt: 0px 2px 9px 2px rgba(9, 49, 69, 0.06);
      --shadow-lg: 0 2.4rem 3.2rem rgba(9, 49, 69, 0.12);

      /* text colors */
      --text-color: var(--color-grey-700);;
      --text-h3-color: var(--color-grey-600);
      --text-h4-color: var(--color-grey-400);
      --text-brand-color: var(--color-brand-300);
      
      /* bg & border color */
      --bg-color: var(--color-grey-200);
      --border-color: var(--color-grey-200);

      /* border radius */
      --border-radius-tiny: 3px;
      --border-radius-sm: 5px;
      --border-radius-md: 7px;
      --border-radius-lg: 9px;
      
      /* sidebar */
      --sidebar-width: 372px;
      --sidebar-bg-color: var(--color-grey-50);
      --sidebar-section-bg-color: var(--color-grey-50);
      --sidebar-selected-navlink: var(--color-grey-0);
      
      /* header */
      --header-height: 90px;
      --header-bg-color: var(--color-grey-0);

      /* main content */
      --main-content-bg-color: var(--color-grey-0);

      /* table */
      --table-section-color:var(--color-grey-0);
    }
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: var(--text-color);
    /* background-color: var(--bg-color); */
    font-family: "Helvetica", sans-serif;
  }

  h3 {
    color: var(--text-h3-color);
    font-weight: 500;
  }

  h4 {
    color: var(--text-h4-color);
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1;
  }
`;
