import { render } from '@testing-library/react'
import MobileTabs from './MobileTabs'
import { Primary } from './MobileTabs.stories';

describe('these are test for the <MobileTabs /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<MobileTabs {...Primary.args} />);
    })
})