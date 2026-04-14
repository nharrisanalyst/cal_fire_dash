import { render } from '@testing-library/react'
import ChartCont from './ChartCont'

import { ChartContStory } from "./ChartCont.stories"

describe('these are test for the <ChartCont /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<ChartCont {...ChartContStory.args} />);
    })
})