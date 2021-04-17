import React, { FC } from 'react'
import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@material-ui/core';

export type RadioProps = MuiRadioProps

const Radio: FC<RadioProps> = props => {
  return <MuiRadio {...props} />
}

export default Radio
