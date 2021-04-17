import React, { FC } from 'react'
import { ListItemAvatar as MuiListItemAvatar, ListItemAvatarProps as MuiListItemAvatarProps } from '@material-ui/core';

export type ListItemAvatarProps = MuiListItemAvatarProps

const ListItemAvatar: FC<ListItemAvatarProps> = props => {
  return <MuiListItemAvatar {...props} />
}

export default ListItemAvatar
