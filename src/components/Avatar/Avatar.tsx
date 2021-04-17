import React, { FC } from 'react'
import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@material-ui/core';

export type AvatarProps = MuiAvatarProps

const Avatar: FC<AvatarProps> = props => {
  return <MuiAvatar {...props} />
}

export default Avatar
