import { useQuery } from '@tanstack/react-query';

import { getAllTransactionsApi, Transaction } from '../../../api';

export const useTransactions = (): {
  errorTransactions: Error | null;
  isPendingTransactions: boolean;
  transactions: Transaction[] | undefined;
} => {
  const {
    data: transactionsData,
    error: errorTransactions,
    isPending: isPendingTransactions,
  } = useQuery({
    queryKey: ['useTransactions'],
    queryFn: getAllTransactionsApi,
  });

  return {
    transactions: transactionsData?.data,
    errorTransactions,
    isPendingTransactions,
  };
};
