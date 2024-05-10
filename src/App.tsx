import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { GlobalStyle } from './GlobalStyle';
import { AppRouter } from './router';

const queryClient = new QueryClient();

export const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AppRouter />
      <ReactQueryDevtools initialIsOpen={false} position="right" />
    </QueryClientProvider>
  );
};
