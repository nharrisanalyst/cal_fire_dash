import { render, screen } from '@testing-library/react'
import County from './County'

describe('these are test for the <County /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<County />);
    })
})