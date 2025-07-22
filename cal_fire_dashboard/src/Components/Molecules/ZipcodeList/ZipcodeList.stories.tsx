import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

import ZipcodeList from './ZipcodeList';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/Zipcode',
  component: ZipcodeList,
  parameters: {
    layout: 'centered',
  },
  decorators:[
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof ZipcodeList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{
    zipcodeList:[90543,98765,34567,12345,12345,12345,12345,12345,12345,12345,12345,76543,78901]
  },
};
