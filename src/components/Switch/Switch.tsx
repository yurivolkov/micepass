import React, { FC } from 'react'
import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from '@material-ui/core';

export type SwitchProps = MuiSwitchProps

const Switch: FC<SwitchProps> = props => {
  return <MuiSwitch {...props} />
}

export default Switch
