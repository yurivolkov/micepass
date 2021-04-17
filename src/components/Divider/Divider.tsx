import React, { FC } from 'react'
import { Divider as MuiDivider, DividerProps as MuiDividerProps } from '@material-ui/core';

export type DividerProps = MuiDividerProps

const Divider: FC<DividerProps> = props => {
  return <MuiDivider {...props} />
}

export default Divider
