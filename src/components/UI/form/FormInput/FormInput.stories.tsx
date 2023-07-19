import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormInput from './index';

export default {
  title: 'Components/Form/Form Input',
  component: FormInput,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof FormInput>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};
