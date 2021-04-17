import React, { FC } from 'react'
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@material-ui/core';

export type ChipProps = MuiChipProps

const Chip: FC<ChipProps> = props => {
  return <MuiChip {...props} />
}

export default Chip
