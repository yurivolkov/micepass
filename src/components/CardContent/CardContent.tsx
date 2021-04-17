import React, { FC } from 'react'
import { CardContent as MuiCardContent, CardContentProps as MuiCardContentProps } from '@material-ui/core';

export type CardContentProps = MuiCardContentProps

const CardContent: FC<CardContentProps> = props => {
  return <MuiCardContent {...props} />
}

export default CardContent
