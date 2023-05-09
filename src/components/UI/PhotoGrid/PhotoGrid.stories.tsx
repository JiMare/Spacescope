import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PhotoGrid from './index';

const imageFile = require('./img/helicopter.jpeg');

export default {
  title: 'Components/Photo Panel',
  component: PhotoGrid,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof PhotoGrid>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof PhotoGrid> = (args) => <PhotoGrid {...args} />;

export const Photos = Template.bind({});
Photos.args = {
  photos: [
    {
      id: 1,
      url: imageFile,
      title: 'Photo 1',
      description: 'Description of photo 1',
    },
    {
      id: 2,
      url: imageFile,
      title: 'Photo 2',
      description: 'Description of photo 2',
    },
    {
      id: 3,
      url: imageFile,
      title: 'Photo 3',
      description: 'Description of photo 3',
    },
    {
      id: 4,
      url: imageFile,
      title: 'Photo 4',
      description: 'Description of photo 4',
    },
    {
      id: 5,
      url: imageFile,
      title: 'Photo 5',
      description: 'Description of photo 5',
    },
  ],
};

export const NoPhotos = Template.bind({});
NoPhotos.args = {
  photos: [
  ],
};
