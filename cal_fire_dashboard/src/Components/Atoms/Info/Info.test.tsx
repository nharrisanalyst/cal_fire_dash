import { render, screen } from '@testing-library/react'
import Info from './Info'
import type { InfoProps } from './Info';

const props:InfoProps = {
    dataInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}


describe('these are test for the <Info /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<Info {...props} />);
    })
})