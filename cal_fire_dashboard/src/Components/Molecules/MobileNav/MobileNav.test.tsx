import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import MobileNav from './MobileNav'

import { Primary } from './MobileNav.stories'

describe('these are test for the <MobileNav /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
        <MemoryRouter>
            <MobileNav {...Primary.args}/>
        </MemoryRouter>
    );
    })
})