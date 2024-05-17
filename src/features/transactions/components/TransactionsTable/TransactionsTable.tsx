import { Transaction } from '../../../../api';
import { Table } from '../../../../components';
import { useTransactions } from '../../queries';

import { TransactionRow } from './components';

export const TransactionsTable = (): JSX.Element => {
  const { isPendingTransactions, transactions } = useTransactions();

  // TODO: add loader
  if (isPendingTransactions) {
    return <div>Loading...</div>;
  }

  return (
    <Table columns="55px 3fr 2fr 2fr 2fr 2fr 1fr 160px">
      <Table.Header>
        <h4></h4>
        <h4>NOTE</h4>
        <h4>FACILITY</h4>
        <h4>AMOUNT</h4>
        <h4>STATUS</h4>
        <h4>REMINDER</h4>
        <h4>DUE DATE</h4>
        <h4></h4>
      </Table.Header>

      <Table.Body<Transaction>
        data={transactions || []}
        render={(transaction) => (
          <TransactionRow key={transaction._id} transaction={transaction} />
        )}
      />
    </Table>
  );
};
