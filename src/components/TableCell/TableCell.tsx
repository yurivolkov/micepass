import React, { FC } from 'react'
import { TableCell as MuiTableCell, TableCellProps as MuiTableCellProps } from '@material-ui/core';

export type TableCellProps = MuiTableCellProps

const TableCell: FC<TableCellProps> = props => {
  return <MuiTableCell {...props} />
}

export default TableCell
