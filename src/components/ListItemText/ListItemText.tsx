import React, { FC } from 'react'
import { ListItemText as MuiListItemText, ListItemTextProps as MuiListItemTextProps } from '@material-ui/core';

export type ListItemTextProps = MuiListItemTextProps

const ListItemText: FC<ListItemTextProps> = props => {
  return <MuiListItemText {...props} />
}

export default ListItemText
