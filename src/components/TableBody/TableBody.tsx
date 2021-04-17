import React, { FC } from 'react'
import { TableBody as MuiTableBody, TableBodyProps as MuiTableBodyProps } from '@material-ui/core';

export type TableBodyProps = MuiTableBodyProps

const TableBody: FC<TableBodyProps> = props => {
  return <MuiTableBody {...props} />
}

export default TableBody
