import React, { CSSProperties, FC } from 'react'
import { createStyles, Typography as MuiTypography, TypographyProps as MuiTypographyProps, withStyles } from '@material-ui/core';

export interface TypographyProps extends MuiTypographyProps {
  fontWeight?: CSSProperties["fontWeight"]
}

const styles = () => createStyles({
  h1: {
    fontWeight: (props: TypographyProps) => props.fontWeight || 'bold',
  },
  h2: {
    fontWeight: (props: TypographyProps) => props.fontWeight || 'bold',
  },
  h3: {
    fontWeight: (props: TypographyProps) => props.fontWeight || 'bold',
  },
  h4: {
    fontWeight: (props: TypographyProps) => props.fontWeight || 'bold',
  },
  h5: {
    fontWeight: (props: TypographyProps) => props.fontWeight || 'bold',
  },
  h6: {
    fontWeight: (props: TypographyProps) => props.fontWeight || 'bold',
  },
})

const Typography: FC<TypographyProps> = props => {
  return <MuiTypography {...props} />
}

export default withStyles(styles)(Typography)
