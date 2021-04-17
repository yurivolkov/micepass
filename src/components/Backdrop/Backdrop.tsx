import React, { FC } from 'react'
import { Backdrop as MuiBackdrop, BackdropProps as MuiBackdropProps } from '@material-ui/core';

export type BackdropProps = MuiBackdropProps

const Backdrop: FC<BackdropProps> = props => {
  return <MuiBackdrop {...props} />
}

export default Backdrop
