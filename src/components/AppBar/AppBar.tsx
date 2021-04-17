import React, { FC } from 'react'
import { AppBar as MuiAppBar, AppBarProps as MuiAppBarProps } from '@material-ui/core';

export type AppBarProps = MuiAppBarProps

const AppBar: FC<AppBarProps> = props => {
  return <MuiAppBar {...props} />
}

export default AppBar
