import {render, screen} from '@testing-library/react'
import TextZipcode from './TextZipcode'
import { MemoryRouter } from 'react-router-dom'



describe('test for <TextZipcode />', ()=>{
    it('renders without crashing', ()=>{
        render(
        <MemoryRouter >
            <TextZipcode />
        </MemoryRouter>)
    })
    it('renders the correct text', async ()=>{
        render(
        <MemoryRouter >
            <TextZipcode />
        </MemoryRouter>)
        const title = screen.getByText("Analyze. Insure.")
        expect(title).toBeInTheDocument()
    })
    
})