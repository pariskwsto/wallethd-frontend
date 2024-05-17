import { TransactionsTable } from '../../features';

import { TransactionsPageWrapper } from './style';

export const TransactionsPage = (): JSX.Element => {
  return (
    <TransactionsPageWrapper>
      <TransactionsTable />
    </TransactionsPageWrapper>
  );
};
