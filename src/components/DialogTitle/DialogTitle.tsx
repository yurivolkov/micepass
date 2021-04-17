import React, { FC } from 'react'
import { DialogTitle as MuiDialogTitle, DialogTitleProps as MuiDialogTitleProps } from '@material-ui/core';

export type DialogTitleProps = MuiDialogTitleProps

const DialogTitle: FC<DialogTitleProps> = props => {
  return <MuiDialogTitle {...props} />
}

export default DialogTitle
