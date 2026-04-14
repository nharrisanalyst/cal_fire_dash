import { render } from '@testing-library/react'
import IndexLinks from './IndexLinks'
import { MemoryRouter } from 'react-router-dom';

describe('these are test for the <IndexLinks /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
        <MemoryRouter>
            <IndexLinks />
        </MemoryRouter>
    );
    })
})