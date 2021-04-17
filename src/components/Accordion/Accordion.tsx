import React, { FC } from 'react'
import { Accordion as MuiAccordion, AccordionProps as MuiAccordionProps } from '@material-ui/core';

export type AccordionProps = MuiAccordionProps

const Accordion: FC<AccordionProps> = props => {
  return <MuiAccordion {...props} />
}

export default Accordion
