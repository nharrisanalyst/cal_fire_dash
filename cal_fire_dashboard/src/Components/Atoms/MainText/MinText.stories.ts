import type { Meta, StoryObj } from '@storybook/react-vite';

import MainText from './MainText';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/MainText',
  component: MainText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{lineOne:'Protect Your Family.', lineTwo:'Know Your Fire Risk.',color:'black'},
};
