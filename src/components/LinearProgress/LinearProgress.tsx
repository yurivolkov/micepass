import React, { FC } from 'react'
import { LinearProgress as MuiLinearProgress, LinearProgressProps as MuiLinearProgressProps } from '@material-ui/core';

export type LinearProgressProps = MuiLinearProgressProps

const LinearProgress: FC<LinearProgressProps> = props => {
  return <MuiLinearProgress {...props} />
}

export default LinearProgress
