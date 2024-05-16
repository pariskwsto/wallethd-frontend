import { axiosInstance } from '../axiosInstance';
import { ApiGenericResponse, Transaction } from '../interfaces';

const transactionsUrl = '/v1/transactions';

export const getAllTransactionsApi = async (): Promise<
  ApiGenericResponse<Transaction[]>
> => {
  const res = await axiosInstance.get(`${transactionsUrl}?sort=date`);
  return res.data;
};
