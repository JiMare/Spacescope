import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchPanel from './index';

export default {
  title: 'Components/panel',
  component: SearchPanel,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof SearchPanel>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof SearchPanel> = (args) => <SearchPanel {...args} />;

export const Search = Template.bind({});
Search.args = {
  children: <div>Content of panel</div>,
};
