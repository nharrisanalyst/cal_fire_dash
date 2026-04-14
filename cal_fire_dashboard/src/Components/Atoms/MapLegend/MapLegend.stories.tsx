import type { Meta, StoryObj } from '@storybook/react-vite';

import MapLegend from './MapLegend';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Maplegend',
  component: MapLegend,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MapLegend>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{
    legendItems:[
      {
        fillColor:" #f52020",
        text: " Risk Very High"
      },
      {
        fillColor:" #f5941d",
        text: " Risk High"
      },
      {
        fillColor:" #f5e61d",
        text: " Risk Moderate"
      }
    ]
  },
};
