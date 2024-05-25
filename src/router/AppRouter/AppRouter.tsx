import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainLayout } from '../../layouts';
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  TransactionsPage,
} from '../../pages';
import { ProtectedRoute } from '../ProtectedRoute';

export const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="transactions" element={<TransactionsPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
