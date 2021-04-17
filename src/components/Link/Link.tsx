import React, { FC } from 'react'
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@material-ui/core';

export type LinkProps = MuiLinkProps

const Link: FC<LinkProps> = props => {
  return <MuiLink {...props} />
}

export default Link
