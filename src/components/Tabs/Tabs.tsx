import React, { FC } from 'react'
import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from '@material-ui/core';

export type TabsProps = MuiTabsProps

const Tabs: FC<TabsProps> = props => {
  return <MuiTabs {...props} />
}

export default Tabs
