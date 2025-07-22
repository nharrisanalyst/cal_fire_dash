import type { Meta, StoryObj } from '@storybook/react-vite';

import DashboardRedirect from './DashboardRedirect';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Page/DashboardRedirect',
  component: DashboardRedirect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DashboardRedirect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{},
};
