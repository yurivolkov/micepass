import React, { FC } from 'react'
import { ListItem as MuiListItem } from '@material-ui/core';

export type ListItemProps = typeof MuiListItem

const ListItem: FC<ListItemProps> = props => {
  return <MuiListItem {...props} />
}

export default ListItem
