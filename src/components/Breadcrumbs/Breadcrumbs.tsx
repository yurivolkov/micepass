import React, { FC } from 'react'
import { Breadcrumbs as MuiBreadcrumbs, BreadcrumbsProps as MuiBreadcrumbsProps } from '@material-ui/core';

export type BreadcrumbsProps = MuiBreadcrumbsProps

const Breadcrumbs: FC<BreadcrumbsProps> = props => {
  return <MuiBreadcrumbs {...props} />
}

export default Breadcrumbs
