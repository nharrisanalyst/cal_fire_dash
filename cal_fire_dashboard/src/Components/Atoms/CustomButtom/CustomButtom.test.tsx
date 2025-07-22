import { render, screen } from '@testing-library/react'
import CustomButtom from './CustomButtom'

describe('these are test for the <CustomButtom /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<CustomButtom />);
    })
})