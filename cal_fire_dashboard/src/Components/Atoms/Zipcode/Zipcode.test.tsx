import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import Zipcode from './Zipcode'

const props = {
    zipcode:95677
}

describe('these are test for the <Zipcode /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
        <MemoryRouter>
            <Zipcode {...props} />
        </MemoryRouter>
        );
    })
})