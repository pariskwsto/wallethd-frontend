import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage, NotFoundPage, TransactionsPage } from '../../pages';

export const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="transactions" element={<TransactionsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
