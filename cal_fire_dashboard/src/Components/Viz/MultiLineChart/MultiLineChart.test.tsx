import { render } from '@testing-library/react'
import MultiLineChart from './MultiLineChart'

import { PPCLineChart } from './MultiLineChart.stories'

describe('these are test for the <MultiLineChart /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<MultiLineChart {...PPCLineChart.args} />);
    })
})