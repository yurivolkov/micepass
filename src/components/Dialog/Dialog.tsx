import React, { FC } from 'react'
import { Dialog as MuiDialog, DialogProps as MuiDialogProps } from '@material-ui/core';

export type DialogProps = MuiDialogProps

const Dialog: FC<DialogProps> = props => {
  return <MuiDialog {...props} />
}

export default Dialog
