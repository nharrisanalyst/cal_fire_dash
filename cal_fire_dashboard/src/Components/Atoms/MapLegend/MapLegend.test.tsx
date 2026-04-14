import { render } from '@testing-library/react'
import MapLegend from './MapLegend'

import { Primary } from './MapLegend.stories';

describe('these are test for the <MapLegend /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<MapLegend {...Primary.args} />);
    })
})