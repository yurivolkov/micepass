import React, { FC } from 'react'
import { Stepper as MuiStepper, StepperProps as MuiStepperProps } from '@material-ui/core';

export type StepperProps = MuiStepperProps

const Stepper: FC<StepperProps> = props => {
  return <MuiStepper {...props} />
}

export default Stepper
