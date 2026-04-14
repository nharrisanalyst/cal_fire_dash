import { render } from '@testing-library/react'
import MobileNavFull from './MobileNavFull'
import { MemoryRouter } from 'react-router-dom';

describe('these are test for the <MobileNavFull /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
        <MemoryRouter>
            <MobileNavFull />
        </MemoryRouter>
        );
    })
})