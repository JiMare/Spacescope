import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './index';
import Menu from '../Menu';
import MenuItem from '../Menu/MenuItem';

export default {
  title: 'Layouts/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => {
  return (
    <BrowserRouter>
      <Header>
        <Menu>
          <MenuItem to="/gallery" label="Gallery" />
          <MenuItem to="/weather" label="Weather" />
          <MenuItem to="/contact" label="Contact" />
        </Menu>
      </Header>
    </BrowserRouter>
  );
};

export const Desktop = Template.bind({});
