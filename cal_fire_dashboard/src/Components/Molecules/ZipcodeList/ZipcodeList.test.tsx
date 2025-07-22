import { render, screen } from '@testing-library/react'
import ZipcodeList from './ZipcodeList'

describe('these are test for the <ZipcodeList /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<ZipcodeList />);
    })
})