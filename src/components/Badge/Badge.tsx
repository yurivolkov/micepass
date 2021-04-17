import React, { FC } from 'react'
import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from '@material-ui/core';

export type BadgeProps = MuiBadgeProps

const Badge: FC<BadgeProps> = props => {
  return <MuiBadge {...props} />
}

export default Badge
