import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

import TextZipCode from './TextZipcode';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/TextZipCode',
  component: TextZipCode,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <MemoryRouter initialEntries={['/']}>
            <div style={{ width: '550px' , backgroundColor:'black', height:'550px' , alignContent:'center'}}>
                <Story />
            </div>
        </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof TextZipCode>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{
  },
};