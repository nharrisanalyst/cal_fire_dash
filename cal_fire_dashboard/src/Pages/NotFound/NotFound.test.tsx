import { render } from '@testing-library/react'
import NotFound from './NotFound'

describe('these are test for the <NotFound /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<NotFound />);
    })
})