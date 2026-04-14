import type { Meta, StoryObj } from '@storybook/react-vite';

import Hamburger from './Hamburger';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/HamburgerNav',
  component: Hamburger,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hamburger>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{
    showUI:(openClose)=>{console.log(openClose)}
  },
};
