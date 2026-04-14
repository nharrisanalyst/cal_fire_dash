import { render } from '@testing-library/react'
import DashStatCont from './DashStatCont'

import { Primary } from './DashStatCont.stories';

describe('these are test for the <DashStatCont /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<DashStatCont {...Primary.args} />);
    })
})