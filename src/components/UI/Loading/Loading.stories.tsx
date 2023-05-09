import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loading from './index';

export default {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof Loading>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const Basic = Template.bind({});
Basic.args = {
};
