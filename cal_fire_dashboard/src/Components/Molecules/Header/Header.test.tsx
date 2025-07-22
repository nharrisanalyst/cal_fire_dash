import Header from './Header'
import { MemoryRouter } from 'react-router-dom'

describe('these are test for <Header/>', ()=>{
    it('renders without crashing', ()=>{
         <MemoryRouter>
            <Header />
         </MemoryRouter>
    })
})