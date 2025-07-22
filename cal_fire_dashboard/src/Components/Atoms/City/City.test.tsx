import { render, screen } from '@testing-library/react'
import City from './City'


describe('these are test for the <City /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<City />);
    })
})