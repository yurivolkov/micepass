import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from 'components/Button';
import { Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button'
  },
} as Meta;

export const Default: Story<ButtonProps> = args => (
  <Grid container spacing={2}>
    <Grid item>
      <Grid container direction="column" spacing={1}>
        <Grid item><Button {...args}/></Grid>
        <Grid item><Button variant="contained" {...args}/></Grid>
        <Grid item><Button variant="outlined" {...args}/></Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column" spacing={1}>
        <Grid item><Button color="primary" {...args}/></Grid>
        <Grid item><Button color="primary" variant="contained" {...args}/></Grid>
        <Grid item><Button color="primary" variant="outlined" {...args}/></Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column" spacing={1}>
        <Grid item><Button color="secondary" {...args} /></Grid>
        <Grid item><Button color="secondary" variant="contained" {...args} /></Grid>
        <Grid item><Button color="secondary" variant="outlined" {...args} /></Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column" spacing={1}>
        <Grid item><Button color="success" {...args} /></Grid>
        <Grid item><Button color="success" variant="contained" {...args} /></Grid>
        <Grid item><Button color="success" variant="outlined" {...args} /></Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column" spacing={1}>
        <Grid item><Button color="warning" {...args} /></Grid>
        <Grid item><Button color="warning" variant="contained" {...args} /></Grid>
        <Grid item><Button color="warning" variant="outlined" {...args} /></Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column" spacing={1}>
        <Grid item><Button color="deep" {...args} /></Grid>
        <Grid item><Button color="deep" variant="contained" {...args} /></Grid>
        <Grid item><Button color="deep" variant="outlined" {...args} /></Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column" spacing={1}>
        <Grid item><Button color="primary" disabled {...args}/></Grid>
        <Grid item><Button color="primary" variant="contained" disabled {...args}/></Grid>
        <Grid item><Button color="primary" variant="outlined" disabled {...args}/></Grid>
      </Grid>
    </Grid>
  </Grid>
)

export const Rounded: Story<ButtonProps> = args => (
  <Grid container spacing={2}>
    <Grid item>
      <Grid container direction="column" spacing={1}>
        <Grid item><Button rounded {...args}/></Grid>
        <Grid item><Button variant="contained" rounded {...args}/></Grid>
        <Grid item><Button variant="outlined" rounded {...args}/></Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column" spacing={1}>
        <Grid item><Button color="primary" rounded {...args}/></Grid>
        <Grid item><Button color="primary" variant="contained" rounded {...args}/></Grid>
        <Grid item><Button color="primary" variant="outlined" rounded {...args}/></Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column" spacing={1}>
        <Grid item><Button color="secondary" rounded {...args} /></Grid>
        <Grid item><Button color="secondary" variant="contained" rounded {...args} /></Grid>
        <Grid item><Button color="secondary" variant="outlined" rounded {...args} /></Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column" spacing={1}>
        <Grid item><Button color="success" rounded {...args} /></Grid>
        <Grid item><Button color="success" variant="contained" rounded {...args} /></Grid>
        <Grid item><Button color="success" variant="outlined" rounded {...args} /></Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column" spacing={1}>
        <Grid item><Button color="warning" rounded {...args} /></Grid>
        <Grid item><Button color="warning" variant="contained" rounded {...args} /></Grid>
        <Grid item><Button color="warning" variant="outlined" rounded {...args} /></Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column" spacing={1}>
        <Grid item><Button color="deep" rounded {...args} /></Grid>
        <Grid item><Button color="deep" variant="contained" rounded {...args} /></Grid>
        <Grid item><Button color="deep" variant="outlined" rounded {...args} /></Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column" spacing={1}>
        <Grid item><Button color="primary" disabled rounded {...args}/></Grid>
        <Grid item><Button color="primary" variant="contained" disabled rounded {...args}/></Grid>
        <Grid item><Button color="primary" variant="outlined" disabled rounded {...args}/></Grid>
      </Grid>
    </Grid>
  </Grid>
)

export const Other: Story<ButtonProps> = args => (
  <>
    <Button
      color="deep"
      variant="contained"
      startIcon={<DeleteIcon fontSize="small"/>}
      {...args}
    />
    <Button
      color="secondary"
      variant="contained"
      startIcon={<DeleteIcon fontSize="small"/>}
      rounded
      {...args}
    />
  </>
)