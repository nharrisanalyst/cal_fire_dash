import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom'

import Icon from './Icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
              <MemoryRouter>
                <Story />
              </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{
  },
};