import { render } from '@testing-library/react'
import FireDash from './FireDash'

import { Primary } from './FireDash.stories';

describe('these are test for the <FireDash /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<FireDash {...Primary.args} />);
    })
})