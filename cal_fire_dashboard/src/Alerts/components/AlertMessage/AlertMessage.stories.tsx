import type { Meta, StoryObj } from '@storybook/react-vite';
import {UseQueryDecorator} from '../../../storybookUtilis/UseQueryDecorator'

import AlertMessage from './AlertMessage';

const meta = {
  title: 'Alert/Atoms/AlertMessage',
  component: AlertMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators:[UseQueryDecorator]
} satisfies Meta<typeof AlertMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args:{
    zipcode:'80435'
  },
};

export const Inactive: Story = {
  args:{
    zipcode:"95677"
  }
}
