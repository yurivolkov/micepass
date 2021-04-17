import React, { FC } from 'react'
import { TableRow as MuiTableRow, TableRowProps as MuiTableRowProps } from '@material-ui/core';

export type TableRowProps = MuiTableRowProps

const TableRow: FC<TableRowProps> = props => {
  return <MuiTableRow {...props} />
}

export default TableRow
