import type { Meta, StoryObj } from '@storybook/react-vite';

import CustomInput from './CustomInput';
import { validateZipcode } from './utils/validateZipcode';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/CustomInput',
  component: CustomInput,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '550px' , backgroundColor:'black', height:'550px' , alignContent:'center'}}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof CustomInput>;

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



export const HeaderInput:Story ={
  args:{
    validateInput:validateZipcode,
    placeholderText:'Enter California Zip code',
    updateStore:(input)=>{},
    id:'zipcodeform',
    validationErrWarning:'Error a NON valid California Zip WAS Submitted'
  }
}