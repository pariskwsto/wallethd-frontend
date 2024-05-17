import type { Meta } from '@storybook/react';

import { TransactionsTable } from '../TransactionsTable';

import { useTransactionsTableMirage } from './useTransactionsTable.mirage';
import { useTransactionsTableEmptyMirage } from './useTransactionsTableEmptyMirage.mirage';

const meta = {
  title: 'Features/Transactions/TransactionsTable',
  component: TransactionsTable,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TransactionsTable>;

export default meta;

export const Default = (): JSX.Element => {
  useTransactionsTableMirage();
  return <TransactionsTable />;
};

export const Empty = (): JSX.Element => {
  useTransactionsTableEmptyMirage();
  return <TransactionsTable />;
};
