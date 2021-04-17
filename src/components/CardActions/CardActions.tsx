import React, { FC } from 'react'
import { CardActions as MuiCardActions, CardActionsProps as MuiCardActionsProps } from '@material-ui/core';

export type CardActionsProps = MuiCardActionsProps

const CardActions: FC<CardActionsProps> = props => {
  return <MuiCardActions {...props} />
}

export default CardActions
