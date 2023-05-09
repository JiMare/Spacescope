import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './index';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Card text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  children: 'Card text',
};
