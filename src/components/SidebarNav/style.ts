import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SideNavWrapper = styled.nav`
  padding: 0 1rem;
  background-color: var(--sidebar-section-bg-color);
`;

export const SideNavListContainer = styled.div`
  padding-top: 2rem;
`;

export const SideNavListTitle = styled.h4`
  padding: 0 1rem 0.875rem;
`;

export const SideNavList = styled.ul`
  display: grid;
  gap: 3px;
  list-style-type: none;
`;

export const SideNavListItem = styled.li``;

export const SideNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  height: 3rem;
  padding: 0.875rem 1rem;
  color: var(--text-color);
  border-radius: var(--border-radius-lg);
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    color: var(--text-brand-color);
  }

  &.active {
    color: var(--text-brand-color);
    background-color: var(--sidebar-selected-navlink);
    box-shadow: var(--shadow-md);
  }
`;
