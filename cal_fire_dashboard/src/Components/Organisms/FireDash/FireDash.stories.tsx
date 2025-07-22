import type { Meta, StoryObj } from '@storybook/react-vite';

import FireDash from './FireDash';

import { PPCLineChart } from '../../Viz/MultiLineChart/MultiLineChart.stories'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Organisms/FireDash',
  component: FireDash,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FireDash>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{
    topStats:[
      {
        value:'High',
        title:'Cal Fire Risk',
        dataInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        value:'High',
        title:'Cal Fire Risk',
        dataInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        value:'High',
        title:'Cal Fire Risk',
        dataInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        value:'High',
        title:'Cal Fire Risk',
        dataInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      }
    ],
    lineCharstItems:[ {
          type:'ppc',
          title:"PPC Score for 95675",
          dataInfo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          lineProps:PPCLineChart.args,
    },{
          type:'ppc',
          title:"PPC Score for 95675",
          dataInfo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          lineProps:PPCLineChart.args,
    }
        ],
  }
};