import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DateObject from 'react-date-object';

import Calendar from './index';

export default {
  title: 'Components/Form/Calendar',
  component: Calendar,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof Calendar>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Calendar> = (args) => <Calendar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  value: new DateObject(),
};
