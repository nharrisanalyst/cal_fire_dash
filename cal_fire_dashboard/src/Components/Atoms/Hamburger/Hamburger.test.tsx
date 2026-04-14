import { render } from '@testing-library/react'
import Hamburger from './Hamburger'

import { Primary } from './Hamburger.stories';

describe('these are test for the <Hamburger /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<Hamburger {...Primary.args} />);
    })
})