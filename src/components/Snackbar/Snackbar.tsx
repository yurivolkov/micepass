import React, { FC } from 'react'
import { Snackbar as MuiSnackbar, SnackbarProps as MuiSnackbarProps } from '@material-ui/core';

export type SnackbarProps = MuiSnackbarProps

const Snackbar: FC<SnackbarProps> = props => {
  return <MuiSnackbar {...props} />
}

export default Snackbar
