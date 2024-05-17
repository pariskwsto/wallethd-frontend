import { AppProvider } from './AppProvider';
import { AppRouter } from './router';

export const App = (): JSX.Element => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
