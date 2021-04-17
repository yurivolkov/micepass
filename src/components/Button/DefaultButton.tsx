import { Button, Theme, withStyles } from "@material-ui/core";

const DefaultButton = withStyles((theme: Theme) => ({
  contained: {
    color: theme.palette.text.primary,
    backgroundColor: '#ffffff',
    border: `1px solid ${
      theme.palette.type === 'light' ? '#707070' : '#ffffff'
    }`,
    '&:hover': {
      backgroundColor: theme.palette.grey[100],
    }
  },
}))(Button);

export default DefaultButton