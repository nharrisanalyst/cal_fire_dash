import type { Meta, StoryObj } from '@storybook/react-vite';
import type { PPCLine } from '../../../api/models';

import avgDataJSON from '../../../__mocks__/avgMock.json'
import zipCodeData from '../../../__mocks__/zipcodeMock.json'
import { apiToLineDataPPC } from './utilis/apiToLineData';

const lineData = apiToLineDataPPC(zipCodeData,avgDataJSON);

import {MultiLinePPCChart} from './MultiLinePPCChart';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Viz/MultiLineChart(PPC)',
  component: MultiLinePPCChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MultiLinePPCChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PPCLineChart: Story = {
  args:{
        legendItems:['95765 PPC Score', 'Avg PPC Score'],
        x:(d:PPCLine)=>+d.year,
        ylist:[
            (d:PPCLine)=>d.ppc_average,
            (d:PPCLine)=>d.ppc_class,
          ],
        yLabel:'PPC SCore',
        xLabel:'Year',
        data:lineData,
        numTicks:lineData.length,
        height:'100%',
        width:'100%',
        colorScale:(d:PPCLine, i:number)=>['black', 'grey'][i],
        xFormat:(t:number|Date)=>{
          if(typeof t === 'number'){
            return String(t);
          }
          return new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(t);

        },
  },
};
