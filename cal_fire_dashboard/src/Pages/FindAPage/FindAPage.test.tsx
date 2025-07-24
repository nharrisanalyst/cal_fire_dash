import { render, screen } from '@testing-library/react'
import FindAPage from './FindAPage'

describe('these are test for the <FindAPage /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<FindAPage />);
    })
})