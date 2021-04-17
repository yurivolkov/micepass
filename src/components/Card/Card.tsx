import React, { FC } from 'react'
import { Card as MuiCard, CardProps as MuiCardProps } from '@material-ui/core';

export type CardProps = MuiCardProps

const Card: FC<CardProps> = props => {
  return <MuiCard {...props} />
}

export default Card
