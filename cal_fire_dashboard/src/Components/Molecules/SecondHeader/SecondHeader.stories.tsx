import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

import SecondHeader from './SecondHeader';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/SecondHeader',
  component: SecondHeader,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <MemoryRouter initialEntries={['/']}>
                <Story />
        </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof SecondHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{},
};
