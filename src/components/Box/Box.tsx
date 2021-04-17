import React, { FC } from 'react'
import { Box as MuiBox, BoxProps as MuiBoxProps } from '@material-ui/core';

export type BoxProps = MuiBoxProps

const Box: FC<BoxProps> = props => {
  return <MuiBox {...props} />
}

export default Box
