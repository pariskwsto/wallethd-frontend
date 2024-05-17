import { ComponentType } from 'react';

import { AppProvider } from '../../AppProvider';

import { OverrideGlobalStyle } from './OverrideGlobalStyle';

export const withAppProvider = (
  Component: ComponentType<object>,
): JSX.Element => {
  return (
    <AppProvider>
      <OverrideGlobalStyle />
      <Component />
    </AppProvider>
  );
};
