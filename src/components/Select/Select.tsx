import React, { FC } from 'react'
import { Select as MuiSelect, SelectProps as MuiSelectProps } from '@material-ui/core';

export type SelectProps = MuiSelectProps

const Select: FC<SelectProps> = props => {
  return <MuiSelect {...props} />
}

export default Select
