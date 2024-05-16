import { ComponentType } from 'react';

import { GlobalStyle } from '../../GlobalStyle';

export const withGlobalStyle = (
  Component: ComponentType<object>,
): JSX.Element => (
  <>
    <GlobalStyle />
    <Component />
  </>
);
