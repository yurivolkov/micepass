import React, { FC } from 'react'
import { Menu as MuiMenu, MenuProps as MuiMenuProps } from '@material-ui/core';

export type MenuProps = MuiMenuProps

const Menu: FC<MenuProps> = props => {
  return <MuiMenu {...props} />
}

export default Menu
