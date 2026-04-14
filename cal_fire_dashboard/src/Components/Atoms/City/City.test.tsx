import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import City from './City'

import { Primary } from './City.stories';

describe('these are test for the <City /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
        <MemoryRouter>
            <City {...Primary.args} />
        </MemoryRouter>
        );
    })
})