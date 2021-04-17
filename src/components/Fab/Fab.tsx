import React, { FC } from 'react'
import { Fab as MuiFab, FabProps as MuiFabProps } from '@material-ui/core';

export type FabProps = MuiFabProps

const Fab: FC<FabProps> = props => {
  return <MuiFab {...props} />
}

export default Fab
