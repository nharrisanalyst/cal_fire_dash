import { render, screen } from '@testing-library/react'
import SearchHeader from './SearchHeader'
import { MemoryRouter } from 'react-router-dom';

import { Primary } from './SearchHeader.stories';

describe('these are test for the <SearchHeader /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
        <MemoryRouter>
            <SearchHeader {...Primary.args} />
        </MemoryRouter>
        );
    })
})