import { render } from '@testing-library/react'
import FireMap from './FireMap'
import { Primary } from './FireMap.stories'

describe('these are test for the <FireMap /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<FireMap {...Primary.args} />);
    })
})