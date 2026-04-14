import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

import MobileNav from './MobileNav';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/MobileNav',
  component: MobileNav,
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
} satisfies Meta<typeof MobileNav>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{
    NavLinks:[
      {
        text:'Find an Agent',
        linkPath:'/findanagent'
      },
      {
        text:'Find an Agent',
        linkPath:'/findanagent'
      },
     {
        text:'Find an Agent',
        linkPath:'/findanagent'
      }
    ]
  },
};
