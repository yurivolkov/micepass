import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Typography, { TypographyProps } from 'components/Typography'

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;

export const Default: Story<TypographyProps> = ({
  variant,
  ...args
}) => (
  <>
    <Typography variant="h1" color="textSecondary" {...args}>
      H1-60px
    </Typography>
    <Typography variant="h2" color="textSecondary" {...args}>
      H2-48px
    </Typography>
    <Typography variant="h3" color="textSecondary" {...args}>
    H3-40px
    </Typography>
    <Typography variant="h4" color="textSecondary" {...args}>
    H4-30px
    </Typography>
    <Typography variant="h5" color="textSecondary" {...args}>
    H5-24px
    </Typography>
    <Typography variant="h6" color="textSecondary" {...args}>
    H6-18px
    </Typography>
    <hr />
    <Typography variant="body1" paragraph {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
    </Typography>
    <hr />
    <Typography variant="body1" paragraph color="textSecondary" {...args}>
      <ul>
        <li>Account verification. We use cookies to verify whether your login status is valid, so that you can save yourself the trouble of re-login every time.</li>
        <li>For service-related functions, we use cookies to enable us to provide service-related functions when you log in. For example, the cookie will record your relevant information so that MICEPass can recognize your identity to facilitate the provision of services.</li>
      </ul>
    </Typography>
  </>
)