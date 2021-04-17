import React, { FC } from 'react'
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@material-ui/core';

export type IconButtonProps = MuiIconButtonProps

const IconButton: FC<IconButtonProps> = props => {
  return <MuiIconButton {...props} />
}

export default IconButton
