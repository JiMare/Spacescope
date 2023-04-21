import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { TolgeeProvider } from '@tolgee/react';
import Header from './index';
import Menu from '../Menu';
import MenuItem from '../Menu/MenuItem';
import { tolgee } from '../../../App';
import LanguageSwitch from '../../UI/LanguageSwitch';

export default {
  title: 'Layouts/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => {
  return (
    <TolgeeProvider tolgee={tolgee}>
      <BrowserRouter>
        <Header>
          <Menu>
            <MenuItem to="/gallery" label="GALLERY" />
            <MenuItem to="/weather" label="WEATHER" />
            <MenuItem to="/contact" label="CONTACT" />
            <LanguageSwitch />
          </Menu>
        </Header>
      </BrowserRouter>
    </TolgeeProvider>
  );
};

export const Desktop = Template.bind({});
