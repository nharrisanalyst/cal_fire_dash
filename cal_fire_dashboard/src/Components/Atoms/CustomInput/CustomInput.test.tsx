import { render,screen } from '@testing-library/react'
import CustomInput from './CustomInput'
import type { CustomInputProps } from './CustomInput'
import userEvent from '@testing-library/user-event';
import { validateZipcode } from './utils/validateZipcode';


const props:CustomInputProps = {
    validateInput:validateZipcode,
    placeholderText:'Enter Zip code',
    applyInput:()=>{},
    id:'zipcodeform',
    validationErrWarning: 'Error a NON valid California Zip WAS Submitted'
}

describe('these are test for the <CustomInput /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<CustomInput {...props} />);
    })

    it('renders the correct error when a non zipcode is submitted', async ()=>{
        const user = userEvent.setup()
        render(<CustomInput {...props} />);
       await user.type(screen.getByPlaceholderText(props.placeholderText as string), "9453")
       await user.click(screen.getByRole('button', { name: /submit/i }));
       const errWarning = await screen.findByText(props.validationErrWarning);
       expect(errWarning).toBeInTheDocument();
    })
})