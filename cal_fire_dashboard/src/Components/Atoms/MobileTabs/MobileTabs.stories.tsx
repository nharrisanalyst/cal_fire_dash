import type { Meta, StoryObj } from '@storybook/react-vite';

import type {ComponentType} from 'react'
import  MapSVG  from '../../../ImageComponents/map.svg?react';

import MobileTabs from './MobileTabs';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/MobileTabs',
  component: MobileTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MobileTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{
    mobileTabs:[{
      text:"Map",
      onClick:()=>console.log('clicked map'),
      SVG:MapSVG as unknown as ComponentType
    }]
  },
};
