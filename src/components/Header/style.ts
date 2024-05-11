import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: var(--header-height);
  padding: 0 2rem;
  background-color: var(--header-bg-color);
  border-bottom: 1px solid var(--border-color);
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
