import { Button, Theme, withStyles, fade } from "@material-ui/core";

const SuccessButton = withStyles((theme: Theme) => ({
  text: {
    color: theme.egPalette.success.main
  },
  contained: {
    color: '#ffffff',
    backgroundColor: theme.egPalette.success.main,
    '&:hover': {
      backgroundColor: theme.egPalette.success.dark,
    },
  },
  outlined: {
    borderColor: fade(theme.egPalette.success.main, 0.5),
    color: theme.egPalette.success.main,
    '&:hover': {
      borderColor: theme.egPalette.success.main,
      backgroundColor: fade(theme.egPalette.success.main, theme.palette.action.hoverOpacity),
    },
  }
}))(Button);

export default SuccessButton