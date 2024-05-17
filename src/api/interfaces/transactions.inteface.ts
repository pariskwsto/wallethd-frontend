export enum TransactionStatus {
  Completed = 'completed',
  Pending = 'pending',
}

export enum TransactionType {
  Expense = 'expense',
  Income = 'income',
}

export interface Transaction {
  _id: string;
  amount: number;
  category: string;
  createdAt: string;
  date: string;
  description?: string;
  dueDate?: string;
  facility?: string;
  isInstallment: boolean;
  isReadyToDeduct: boolean;
  note: string;
  paymentMethod: string;
  receiptTaken: boolean;
  reminderDate?: string;
  status: TransactionStatus;
  subcategory?: string;
  type: TransactionType;
  updatedAt: string;
  user: string;
  website?: string;
}
