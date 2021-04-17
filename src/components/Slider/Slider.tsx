import React, { FC } from 'react'
import { Slider as MuiSlider, SliderProps as MuiSliderProps } from '@material-ui/core';

export type SliderProps = MuiSliderProps

const Slider: FC<SliderProps> = props => {
  return <MuiSlider {...props} />
}

export default Slider
