import { render, screen } from '@testing-library/react'
import SecondHeader from './SecondHeader'
import { MemoryRouter } from 'react-router-dom'
import { validateZipcode } from '../../Atoms/CustomInput/utils/validateZipcode'

describe('these are test for the <SecondHeader /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
        <MemoryRouter>
            <SecondHeader />
        </MemoryRouter>
    );
    })
})