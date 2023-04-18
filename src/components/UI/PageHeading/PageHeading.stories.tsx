import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageHeading from './index';

export default {
  title: 'Components/Heading',
  component: PageHeading,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof PageHeading>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof PageHeading> = (args) => <PageHeading {...args} />;

export const Page = Template.bind({});
Page.args = {
  children: 'Page Title',
};
