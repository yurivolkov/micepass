import { Button, Theme, withStyles, fade } from "@material-ui/core";

const DeepButton = withStyles((theme: Theme) => ({
  text: {
    color: theme.egPalette.deep.main
  },
  contained: {
    color: '#ffffff',
    backgroundColor: theme.egPalette.deep.main,
    '&:hover': {
      backgroundColor: theme.egPalette.deep.dark,
    },
  },
  outlined: {
    borderColor: fade(theme.egPalette.deep.main, 0.5),
    color: theme.egPalette.deep.main,
    '&:hover': {
      borderColor: theme.egPalette.deep.main,
      backgroundColor: fade(theme.egPalette.deep.main, theme.palette.action.hoverOpacity),
    },
  }
}))(Button);

export default DeepButton