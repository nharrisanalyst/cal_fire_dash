import type { Meta, StoryObj } from '@storybook/react-vite';
import type { MouseEvent } from 'react';

import CustomButtom from './CustomButtom';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/CustomButton',
  component: CustomButtom,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomButtom>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{
   handleButtonClick:(e:MouseEvent<HTMLButtonElement>) => {console.log('click me', e)},
   buttonLabel:'Search'
  },
};
