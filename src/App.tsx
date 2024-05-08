import { GlobalStyle } from './GlobalStyle';
import { AppRouter } from './router';

export const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
};
