import React, { FC } from 'react'
import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from '@material-ui/core';

export type TooltipProps = MuiTooltipProps

const Tooltip: FC<TooltipProps> = props => {
  return <MuiTooltip {...props} />
}

export default Tooltip
