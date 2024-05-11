import { Outlet } from 'react-router-dom';

import { Header, Sidebar } from '../../components';

import { MainLayoutContent, MainLayoutWrapper } from './style';

export const MainLayout = (): JSX.Element => {
  return (
    <MainLayoutWrapper>
      <Sidebar />
      <MainLayoutContent>
        <Header />
        <Outlet />
      </MainLayoutContent>
    </MainLayoutWrapper>
  );
};
