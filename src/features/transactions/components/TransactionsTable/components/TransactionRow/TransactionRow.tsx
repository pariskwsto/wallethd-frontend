import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { IoMdTrash } from 'react-icons/io';
import { IoPencilSharp } from 'react-icons/io5';
import { format } from 'date-fns';

import { Transaction, TransactionStatus } from '../../../../../../api';
import { Table } from '../../../../../../components';
import { formatCurrency } from '../../../../../../utils';

import {
  TransactionRowActionIcon,
  TransactionRowActions,
  TransactionRowAmount,
  TransactionRowFacility,
  TransactionRowNote,
  TransactionRowNoteContainer,
  TransactionRowNoteDetails,
  TransactionRowNoteType,
  TransactionRowTag,
  TransactionRowType,
} from './style';

const transactionStatusColors: Record<TransactionStatus, string> = {
  [TransactionStatus.Pending]: 'yellow',
  [TransactionStatus.Completed]: 'green',
};

interface TransactionRowProps {
  transaction: Transaction;
}

export const TransactionRow = ({
  transaction,
}: TransactionRowProps): JSX.Element => {
  const { amount, date, dueDate, facility, note, reminderDate, status, type } =
    transaction;

  return (
    <Table.Row>
      <TransactionRowType>
        {type === 'expense' ? (
          <CiCircleMinus size={34} color="var(--color-red-700)" />
        ) : (
          <CiCirclePlus size={34} color="var(--color-green-700)" />
        )}
      </TransactionRowType>
      <TransactionRowNoteContainer>
        <TransactionRowNote>{note}</TransactionRowNote>
        <TransactionRowNoteDetails>
          <TransactionRowNoteType>{type}</TransactionRowNoteType> &#183;{' '}
          {format(new Date(date), 'MMM MM, yyyy')}
        </TransactionRowNoteDetails>
      </TransactionRowNoteContainer>
      <TransactionRowFacility>{facility || '-'}</TransactionRowFacility>
      <TransactionRowAmount>{formatCurrency(amount)}</TransactionRowAmount>
      <TransactionRowTag $color={transactionStatusColors[status]}>
        {status.replace('-', ' ')}
      </TransactionRowTag>
      <div>
        {reminderDate ? format(new Date(reminderDate), 'dd/MM/yyyy') : '-'}
      </div>
      <div>{dueDate ? format(new Date(dueDate), 'dd/MM/yyyy') : '-'}</div>
      <TransactionRowActions>
        <TransactionRowActionIcon title="Edit transaction">
          <IoPencilSharp size={20} />
        </TransactionRowActionIcon>
        <TransactionRowActionIcon title="Delete transaction">
          <IoMdTrash size={20} />
        </TransactionRowActionIcon>
      </TransactionRowActions>
    </Table.Row>
  );
};
