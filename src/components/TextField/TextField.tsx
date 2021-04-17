import React, { FC } from 'react'
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@material-ui/core';

export type TextFieldProps = MuiTextFieldProps

const TextField: FC<TextFieldProps> = props => {
  return <MuiTextField {...props} />
}

export default TextField
