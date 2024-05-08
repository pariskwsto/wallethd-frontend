import { Outlet } from 'react-router-dom';

import { MainLayoutWrapper } from './style';

export const MainLayout = (): JSX.Element => {
  return (
    <MainLayoutWrapper>
      <div>Sidebar</div>
      <div>
        <div>Header</div>
        <div>
          <Outlet />
        </div>
        <div>Footer</div>
      </div>
    </MainLayoutWrapper>
  );
};
