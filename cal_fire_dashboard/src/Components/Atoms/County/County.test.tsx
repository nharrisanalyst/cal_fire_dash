import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import County from './County'

import {Primary} from './County.stories'

describe('these are test for the <County /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
        <MemoryRouter>
            <County {...Primary.args} />
        </MemoryRouter>);
    })
})