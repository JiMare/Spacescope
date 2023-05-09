import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormSelect from './index';

export default {
  title: 'Components/Form/Form Select',
  component: FormSelect,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof FormSelect>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof FormSelect> = (args) => <FormSelect {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  list: [
    {
      value: 1,
      label: 'Blue color',
    },
    {
      value: 2,
      label: 'Red color',
    },
    {
      value: 3,
      label: 'Pink color',
    },
    {
      value: 4,
      label: 'Green color',
    },
  ],
};
