import React, { FC } from 'react'
import { Hidden as MuiHidden, HiddenProps as MuiHiddenProps } from '@material-ui/core';

export type HiddenProps = MuiHiddenProps

const Hidden: FC<HiddenProps> = props => {
  return <MuiHidden {...props} />
}

export default Hidden
