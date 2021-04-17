import React, { FC } from 'react'
import { BottomNavigation as MuiBottomNavigation, BottomNavigationProps as MuiBottomNavigationProps } from '@material-ui/core';

export type BottomNavigationProps = MuiBottomNavigationProps

const BottomNavigation: FC<BottomNavigationProps> = props => {
  return <MuiBottomNavigation {...props} />
}

export default BottomNavigation
