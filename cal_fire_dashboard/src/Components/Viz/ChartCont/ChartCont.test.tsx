import { render, screen } from '@testing-library/react'
import ChartCont from './ChartCont'

describe('these are test for the <ChartCont /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<ChartCont />);
    })
})