import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormField from './index';

export default {
  title: 'Components/Form/Form Field',
  component: FormField,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof FormField>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof FormField> = (args) => <FormField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Name',
  children: <input type="text" />,
};

export const Required = Template.bind({});
Required.args = {
  label: 'Name',
  children: <input type="text" />,
  required: true,
};
