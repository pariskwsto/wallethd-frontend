import { createServer } from 'miragejs';

import transactionsTableData from '../__tests__/data/transactions-table-data.json';

export const useTransactionsTableMirage = (): void => {
  createServer({
    routes() {
      this.get('http://localhost:5005/v1/transactions', () => {
        return {
          data: transactionsTableData.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          }),
        };
      });
    },
  });
};
