import type { Meta, StoryObj } from '@storybook/react-vite';

import DashStatCont from './DashStatCont';
import ScaledText from '../ScaledText/ScaledText'


import {High} from '../ScaledText/ScaledText.stories'


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Viz/DashStatCont',
  component: DashStatCont,
  subcomponents:{ ScaledText },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DashStatCont>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{
    title:'Cal Fire Risk',
    children:<ScaledText {...High.args} />,
    avg:3.9,
    dataInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
};

export const NoAverage: Story = {
  args:{
    title:'Cal Fire Risk',
    children:<ScaledText {...High.args} />,
    dataInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
};
