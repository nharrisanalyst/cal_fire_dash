// @ts-nocheck
//ignoring all typescript errors in this file as this file is not completed or imported anywhere
import type { Meta, StoryObj } from '@storybook/react-vite';

import MobileTabDash from './MobileTabDash';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/MobileTabDash',
  component: MobileTabDash,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MobileTabDash>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{},
};
