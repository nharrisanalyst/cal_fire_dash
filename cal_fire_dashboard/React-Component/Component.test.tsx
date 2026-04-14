import { render } from '@testing-library/react'
import Component from './Component'

describe('these are test for the <Component /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<Component />);
    })
})