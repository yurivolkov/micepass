import React, { FC } from 'react'
import { Drawer as MuiDrawer, DrawerProps as MuiDrawerProps } from '@material-ui/core';

export type DrawerProps = MuiDrawerProps

const Drawer: FC<DrawerProps> = props => {
  return <MuiDrawer {...props} />
}

export default Drawer
