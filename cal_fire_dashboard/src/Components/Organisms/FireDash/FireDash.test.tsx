import { render, screen } from '@testing-library/react'
import FireDash from './FireDash'

describe('these are test for the <FireDash /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<FireDash />);
    })
})