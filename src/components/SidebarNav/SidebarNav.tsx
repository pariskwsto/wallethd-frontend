import { NavLink } from 'react-router-dom';

import { SideNavList, SideNavWrapper } from './style';

export const SidebarNav = (): JSX.Element => {
  return (
    <SideNavWrapper>
      <SideNavList>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/transactions">Transactions</NavLink>
        </li>
      </SideNavList>
    </SideNavWrapper>
  );
};
