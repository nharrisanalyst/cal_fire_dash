import { render, screen } from '@testing-library/react'
import CityList from './CityList'

describe('these are test for the <CityList /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<CityList />);
    })
})