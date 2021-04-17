import React, { FC } from 'react'
import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@material-ui/core';

export type CheckboxProps = MuiCheckboxProps

const Checkbox: FC<CheckboxProps> = props => {
  return <MuiCheckbox {...props} />
}

export default Checkbox
