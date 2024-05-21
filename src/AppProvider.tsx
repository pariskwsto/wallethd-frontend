import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppToaster } from './AppToaster';
import { GlobalStyle } from './GlobalStyle';

const queryClient = new QueryClient();

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <>{children}</>
      <AppToaster />
      <ReactQueryDevtools initialIsOpen={false} position="right" />
    </QueryClientProvider>
  );
};
