import React, { FC } from 'react'
import { Table as MuiTable, TableProps as MuiTableProps } from '@material-ui/core';

export type TableProps = MuiTableProps

const Table: FC<TableProps> = props => {
  return <MuiTable {...props} />
}

export default Table
