import type { Meta, StoryObj } from '@storybook/react-vite';

import ChartCont from './ChartCont';

import { PPCLineChart } from '../MultiLineChart/MultiLineChart.stories';
import {MultiLinePPCChart} from '../MultiLineChart/MultiLinePPCChart';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Viz/ChartCont',
  component: ChartCont,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChartCont>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ChartContStory: Story = {
  args:{
    title:'PPC Score for 95675, Place, CA',
    children:<MultiLinePPCChart {...PPCLineChart.args} />,
    dataInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
};
