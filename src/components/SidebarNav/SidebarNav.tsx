import { MdDashboard, MdList } from 'react-icons/md';

import {
  SideNavLink,
  SideNavList,
  SideNavListContainer,
  SideNavListItem,
  SideNavListTitle,
  SideNavWrapper,
} from './style';

export const SidebarNav = (): JSX.Element => {
  return (
    <SideNavWrapper>
      <SideNavListContainer>
        <SideNavListTitle>GENERAL</SideNavListTitle>
        <SideNavList>
          <SideNavListItem>
            <SideNavLink to="/">
              <MdDashboard size={20} /> <span>Home</span>
            </SideNavLink>
          </SideNavListItem>
          <SideNavListItem>
            <SideNavLink to="/transactions">
              <MdList size={20} /> <span>Transactions</span>
            </SideNavLink>
          </SideNavListItem>
        </SideNavList>
      </SideNavListContainer>
    </SideNavWrapper>
  );
};
