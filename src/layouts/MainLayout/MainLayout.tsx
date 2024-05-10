import { Outlet } from 'react-router-dom';

import { Header, Sidebar } from '../../components';

import {
  MainLayoutContent,
  MainLayoutHeader,
  MainLayoutOutlet,
  MainLayoutSidebar,
  MainLayoutWrapper,
} from './style';

export const MainLayout = (): JSX.Element => {
  return (
    <MainLayoutWrapper>
      <MainLayoutSidebar>
        <Sidebar />
      </MainLayoutSidebar>
      <MainLayoutContent>
        <MainLayoutHeader>
          <Header />
        </MainLayoutHeader>
        <MainLayoutOutlet>
          <Outlet />
        </MainLayoutOutlet>
      </MainLayoutContent>
    </MainLayoutWrapper>
  );
};
