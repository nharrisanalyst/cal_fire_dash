import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

import InfoAndLink from './InfoAndLink';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/InfoAndLink',
  component: InfoAndLink,
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
} satisfies Meta<typeof InfoAndLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{
    linkText:'Find Home Insurance',
    linkTo:'/buyhomeinsurance',
    children:(
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan, ante sed ultricies ullamcorper, velit velit lacinia metus, quis blandit risus leo sit amet sem. Etiam tristique erat at enim ultrices tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed dolor ligula, accumsan eu quam a, pretium congue risus. Proin dui nisi, accumsan vitae ligula sed, aliquam pharetra tellus. Ut a dui condimentum, tristique neque eu, mollis nibh.
      </div>
    )
  },
};
