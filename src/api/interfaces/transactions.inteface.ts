export interface Transaction {
  _id: string;
  amount: number;
  category: string;
  createdAt: string;
  date: string;
  description: string;
  facility: string;
  isInstallment: boolean;
  isReadyToDeduct: boolean;
  note: string;
  paymentMethod: string;
  receiptTaken: boolean;
  status: string;
  type: string;
  updatedAt: string;
  user: string;
}
