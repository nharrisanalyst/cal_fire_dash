import { render, screen } from '@testing-library/react'
import DashboardRedirect from './DashboardRedirect'

describe('these are test for the <DashboardRedirect /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<DashboardRedirect />);
    })
})