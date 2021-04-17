import React, { FC } from 'react'
import { Container as MuiContainer, ContainerProps as MuiContainerProps } from '@material-ui/core';

export type ContainerProps = MuiContainerProps

const Container: FC<ContainerProps> = props => {
  return <MuiContainer {...props} />
}

export default Container
