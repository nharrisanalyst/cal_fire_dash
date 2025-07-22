import { render, screen } from '@testing-library/react'
import HomeInfoBlocks from './HomeInfoBlocks'
import { MemoryRouter } from 'react-router-dom';

describe('these are test for the <HomeInfoBlocks /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
        <MemoryRouter>
        <HomeInfoBlocks />
      </MemoryRouter>);
    })
})