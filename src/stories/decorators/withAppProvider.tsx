import { ComponentType } from 'react';

import { AppProvider } from '../../AppProvider';

export const withAppProvider = (
  Component: ComponentType<object>,
): JSX.Element => (
  <AppProvider>
    <Component />
  </AppProvider>
);
