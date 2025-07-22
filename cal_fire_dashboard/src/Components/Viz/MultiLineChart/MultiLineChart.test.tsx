import { render, screen } from '@testing-library/react'
import MultiLineChart from './MultiLineChart'

describe('these are test for the <MultiLineChart /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<MultiLineChart />);
    })
})