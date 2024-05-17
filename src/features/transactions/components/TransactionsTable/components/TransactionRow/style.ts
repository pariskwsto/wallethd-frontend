import styled from 'styled-components';

export const TransactionRowType = styled.div`
  display: flex;
  align-items: center;
`;

export const TransactionRowNoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2.5rem;
`;

export const TransactionRowNote = styled.div`
  color: var(--color-gray-900);
  font-size: 1rem;
`;

export const TransactionRowNoteDetails = styled.span`
  color: var(--color-gray-200);
  font-size: 0.875rem;
`;

export const TransactionRowNoteType = styled.span`
  text-transform: capitalize;
`;

export const TransactionRowFacility = styled.div`
  font-size: 0.875rem;
`;

export const TransactionRowAmount = styled.div`
  font-size: 1.125rem;
`;

export const TransactionRowTag = styled.span<{ $color: string }>`
  width: 4.5rem;
  padding: 0.4rem;
  color: var(--color-${({ $color }) => $color}-700);
  background-color: var(--color-${({ $color }) => $color}-100);
  border-radius: var(--border-radius-sm);
  font-size: 0.75rem;
  text-align: center;
  text-transform: capitalize;
`;

export const TransactionRowActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const TransactionRowActionIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  cursor: pointer;

  // TODO: add hover effect
`;
