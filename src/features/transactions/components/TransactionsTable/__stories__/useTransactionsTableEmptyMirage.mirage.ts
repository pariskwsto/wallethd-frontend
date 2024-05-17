import { createServer } from 'miragejs';

export const useTransactionsTableEmptyMirage = (): void => {
  createServer({
    routes() {
      this.get('http://localhost:5005/v1/transactions', () => {
        return {
          data: [],
        };
      });
    },
  });
};
