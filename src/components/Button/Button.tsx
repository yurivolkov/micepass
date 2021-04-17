import { FC } from 'react';
import { withStyles, Button as MuiButton, ButtonProps as MuiButtonProps, Theme, createStyles } from '@material-ui/core';
import DefaultButton from './DefaultButton'
import SuccessButton from './SuccessButton'
import WarningButton from './WarningButton'
import DeepButton from './DeepButton'

export interface ButtonProps extends Omit<MuiButtonProps, "size" | "color">{
  rounded?: boolean
  color?: MuiButtonProps["color"] | "success" | "warning" | "deep"
}

const styles = (theme: Theme) => createStyles({
  root: {
    borderRadius: (props: ButtonProps) => props.rounded ? 25 : undefined,
    padding: theme.spacing(0.8, 2.5),
    textTransform: 'none',
  },
  containedPrimary: {
    color: '#ffffff'
  },
  containedSecondary: {
    color: '#ffffff'
  },
})

const Button: FC<ButtonProps> = (props) => {
  const {
    color,
    ...other
  } = props
  if (!color) {
    return <DefaultButton {...other}/>
  }
  if (color === 'success') {
    return <SuccessButton {...other} />
  }
  if (color === 'warning') {
    return <WarningButton {...other} />
  }
  if (color === 'deep') {
    return <DeepButton {...other} />
  }
  return <MuiButton color={color} {...other} />
}

export default withStyles(styles)(Button);
