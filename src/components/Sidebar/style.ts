import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  display: grid;
  width: var(--sidebar-width);
  height: 100%;
  padding: 0 1rem;
  background-color: var(--sidebar-bg-color);
`;

export const SidebarContainer = styled.div`
  display: grid;
  grid-template-rows: var(--header-height) 1fr;
  gap: 1px;
  background-color: var(--bg-color);
`;
