import { render, screen } from '@testing-library/react'
import DashStatCont from './DashStatCont'

describe('these are test for the <DashStatCont /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<DashStatCont />);
    })
})