import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainLayout } from '../../layouts';
import { HomePage, NotFoundPage, TransactionsPage } from '../../pages';

export const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="transactions" element={<TransactionsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
