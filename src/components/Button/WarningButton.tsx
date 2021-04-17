import { Button, Theme, withStyles, fade } from "@material-ui/core";

const WarningButton = withStyles((theme: Theme) => ({
  text: {
    color: theme.egPalette.warning.main
  },
  contained: {
    color: theme.palette.text.primary,
    backgroundColor: theme.egPalette.warning.main,
    '&:hover': {
      backgroundColor: theme.egPalette.warning.dark,
    },
  },
  outlined: {
    borderColor: fade(theme.egPalette.warning.main, 0.5),
    color: theme.egPalette.warning.main,
    '&:hover': {
      borderColor: theme.egPalette.warning.main,
      backgroundColor: fade(theme.egPalette.warning.main, theme.palette.action.hoverOpacity),
    },
  }
}))(Button);

export default WarningButton