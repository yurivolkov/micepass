import React, { FC } from 'react'
import { TableHead as MuiTableHead, TableHeadProps as MuiTableHeadProps } from '@material-ui/core';

export type TableHeadProps = MuiTableHeadProps

const TableHead: FC<TableHeadProps> = props => {
  return <MuiTableHead {...props} />
}

export default TableHead
