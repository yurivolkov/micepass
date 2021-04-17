import React, { FC } from 'react'
import { GridList as MuiGridList, GridListProps as MuiGridListProps } from '@material-ui/core';

export type GridListProps = MuiGridListProps

const GridList: FC<GridListProps> = props => {
  return <MuiGridList {...props} />
}

export default GridList
