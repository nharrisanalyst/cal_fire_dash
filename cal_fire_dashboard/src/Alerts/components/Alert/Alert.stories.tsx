import type { Meta, StoryObj } from '@storybook/react-vite';

import Alert from './Alert';

const meta = {
  title: 'Alert/Atoms/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args:{
    status:'active'
  },
};

export const Inactive: Story = {
  args:{
    status:"inactive"
  }
}
