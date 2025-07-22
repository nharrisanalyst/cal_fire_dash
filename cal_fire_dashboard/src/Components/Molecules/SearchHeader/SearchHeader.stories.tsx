import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import { validateZipcode } from '../../Atoms/CustomInput/utils/validateZipcode';

import SearchHeader from './SearchHeader';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/SearchHeader',
  component: SearchHeader,
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
} satisfies Meta<typeof SearchHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{
        validateInput:validateZipcode,
        placeholderText:'Enter California Zip code',
        updateStore:(input)=>{},
        id:'zipcodeform',
        validationErrWarning:'Error a NON valid California Zip WAS Submitted'

  },
};
