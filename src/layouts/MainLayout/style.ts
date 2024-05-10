import styled from 'styled-components';

export const MainLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 255px 1fr;
  gap: 1px;
  height: 100vh;
`;

export const MainLayoutSidebar = styled.div`
  background-color: var(--section-color);
`;

export const MainLayoutContent = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1px;
`;

export const MainLayoutHeader = styled.div`
  background-color: var(--section-color);
`;

export const MainLayoutOutlet = styled.div`
  background-color: var(--section-color);
`;
