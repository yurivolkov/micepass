import React, { FC } from 'react'
import { AccordionSummary as MuiAccordionSummary, AccordionSummaryProps as MuiAccordionSummaryProps } from '@material-ui/core';

export type AccordionSummaryProps = MuiAccordionSummaryProps

const AccordionSummary: FC<AccordionSummaryProps> = props => {
  return <MuiAccordionSummary {...props} />
}

export default AccordionSummary
