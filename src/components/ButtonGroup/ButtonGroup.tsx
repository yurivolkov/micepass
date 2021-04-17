import React, { FC } from 'react'
import { ButtonGroup as MuiButtonGroup, ButtonGroupProps as MuiButtonGroupProps } from '@material-ui/core';

export type ButtonGroupProps = MuiButtonGroupProps

const ButtonGroup: FC<ButtonGroupProps> = props => {
  return <MuiButtonGroup {...props} />
}

export default ButtonGroup
