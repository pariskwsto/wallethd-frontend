import styled from 'styled-components';

export const TableWrapper = styled.div`
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
`;

const CommonRow = styled.div<{ $columns: string }>`
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns};
  align-items: center;
`;

export const HeaderWrapper = styled(CommonRow)`
  padding: 1rem 1.875rem;
  border-bottom: 1px solid var(--border-color);

  & > h4 {
    color: var(--color-grey-600);
    letter-spacing: 0.4px;
  }
`;

export const BodyEmpty = styled.p`
  font-size: 1.125rem;
  text-align: center;
  margin: 2rem;
`;

export const BodyWrapper = styled.div`
  padding: 0 1.875rem;
`;

export const RowWrapper = styled(CommonRow)`
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
`;
