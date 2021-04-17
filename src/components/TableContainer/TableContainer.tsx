import React, { FC } from 'react'
import { TableContainer as MuiTableContainer, TableContainerProps as MuiTableContainerProps } from '@material-ui/core';

export type TableContainerProps = MuiTableContainerProps

const TableContainer: FC<TableContainerProps> = props => {
  return <MuiTableContainer {...props} />
}

export default TableContainer
