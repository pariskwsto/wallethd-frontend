import { createContext, ReactNode, useContext } from 'react';

import {
  BodyEmpty,
  BodyWrapper,
  HeaderWrapper,
  RowWrapper,
  TableWrapper,
} from './style';

interface IContext {
  columns: string;
}

const TableContext = createContext<IContext | undefined>(undefined);

interface TableProps {
  children: ReactNode;
  columns: string;
}

export const Table = ({ children, columns }: TableProps): JSX.Element => {
  return (
    <TableContext.Provider value={{ columns }}>
      <TableWrapper role="table">{children}</TableWrapper>
    </TableContext.Provider>
  );
};

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps): JSX.Element => {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error('Table Header must be used within a Table');
  }

  const { columns } = context;

  return (
    <HeaderWrapper role="row" $columns={columns} as="header">
      {children}
    </HeaderWrapper>
  );
};

interface BodyProps<T> {
  data: T[];
  render: (item: T) => ReactNode;
}

const Body = <T,>({ data, render }: BodyProps<T>) => {
  if (!data.length) {
    return <BodyEmpty>No data to show at the moment</BodyEmpty>;
  }

  return <BodyWrapper>{data.map(render)}</BodyWrapper>;
};

interface RowProps {
  children: ReactNode;
}

const Row = ({ children }: RowProps): JSX.Element => {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error('Table Row must be used within a Table');
  }

  const { columns } = context;

  return (
    <RowWrapper role="row" $columns={columns}>
      {children}
    </RowWrapper>
  );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

Table.displayName = 'Table';
Header.displayName = 'Table.Header';
Body.displayName = 'Table.Body';
Row.displayName = 'Table.Row';
