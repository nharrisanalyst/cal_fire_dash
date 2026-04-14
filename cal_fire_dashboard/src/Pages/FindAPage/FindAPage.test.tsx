import { render } from '@testing-library/react'
import FindAPage from './FindAPage'
import { MemoryRouter } from 'react-router-dom';

describe('these are test for the <FindAPage /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
        <MemoryRouter>
            <FindAPage />
        </MemoryRouter>
    );
    })
})