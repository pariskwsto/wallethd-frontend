import { Logo } from '../Logo/Logo';
import { SidebarNav } from '../SidebarNav';

import { SidebarContainer, SidebarWrapper } from './style';

export const Sidebar = (): JSX.Element => {
  return (
    <SidebarWrapper>
      <SidebarContainer>
        <Logo />
        <SidebarNav />
      </SidebarContainer>
    </SidebarWrapper>
  );
};
