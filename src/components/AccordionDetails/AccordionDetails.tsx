import React, { FC } from 'react'
import { AccordionDetails as MuiAccordionDetails, AccordionDetailsProps as MuiAccordionDetailsProps } from '@material-ui/core';

export type AccordionDetailsProps = MuiAccordionDetailsProps

const AccordionDetails: FC<AccordionDetailsProps> = props => {
  return <MuiAccordionDetails {...props} />
}

export default AccordionDetails
