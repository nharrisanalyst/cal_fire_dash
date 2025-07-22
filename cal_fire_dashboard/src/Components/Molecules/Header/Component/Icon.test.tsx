import Icon from './Icon'
import { MemoryRouter } from 'react-router-dom'

describe('these are test for <Icon/>', ()=>{
    it('renders without crashing', ()=>{
        <MemoryRouter >
             <Icon />
        </MemoryRouter>
    })
})