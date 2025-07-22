import type { Meta, StoryObj } from '@storybook/react-vite';

import ScaledText, {scale} from './ScaledText';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Viz/ScaledText',
  component: ScaledText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScaledText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const High: Story = {
  args:{
    value:'High',
    scale:scale
  },
};
