import React, { FC } from 'react'
import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@material-ui/core';

export type PaperProps = MuiPaperProps

const Paper: FC<PaperProps> = props => {
  return <MuiPaper {...props} />
}

export default Paper
