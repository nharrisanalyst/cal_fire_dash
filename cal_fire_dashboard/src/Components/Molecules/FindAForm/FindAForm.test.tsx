import { render } from '@testing-library/react'
import FindAForm from './FindAForm'

import { Primary } from './FindAForm.stories';

describe('these are test for the <FindAForm /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<FindAForm {...Primary.args} />);
    })
})