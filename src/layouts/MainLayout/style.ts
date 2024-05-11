import styled from 'styled-components';

export const MainLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1px;
  height: 100vh;
`;

export const MainLayoutContent = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1px;
  background-color: var(--main-content-bg-color);
`;
