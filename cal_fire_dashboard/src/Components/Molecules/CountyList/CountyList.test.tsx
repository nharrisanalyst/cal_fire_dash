import { render, screen } from '@testing-library/react'
import CountyList from './CountyList'
import { MemoryRouter } from 'react-router-dom';

describe('these are test for the <CountyList /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
       <MemoryRouter>
            <CountyList />
        </MemoryRouter>
        );
    })
})