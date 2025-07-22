import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

import ImageInput from './ImageInput';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/ImageInput',
  component: ImageInput,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <MemoryRouter initialEntries={['/']}>
            <div style={{ width: '900px' ,  height:'550px' , alignContent:'center'}}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </div>
        </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof ImageInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{},
};
