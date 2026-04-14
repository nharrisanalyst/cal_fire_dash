import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import CityList from './CityList'

import { Primary } from './CityList.stories'

describe('these are test for the <CityList /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
        <MemoryRouter>
            <CityList {...Primary.args} />
        </MemoryRouter>
        );
    })
})