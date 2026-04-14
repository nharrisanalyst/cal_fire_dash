import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ZipcodeList from './ZipcodeList'

import {Primary} from './ZipcodeList.stories'

describe('these are test for the <ZipcodeList /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
        <MemoryRouter>
            <ZipcodeList {...Primary.args} />
        </MemoryRouter>
        );
    })
})