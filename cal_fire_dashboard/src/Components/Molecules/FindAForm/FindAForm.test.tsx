import { render, screen } from '@testing-library/react'
import FindAForm from './FindAForm'

describe('these are test for the <FindAForm /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<FindAForm />);
    })
})