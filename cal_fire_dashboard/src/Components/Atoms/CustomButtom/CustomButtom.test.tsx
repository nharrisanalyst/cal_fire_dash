import { render } from '@testing-library/react'
import CustomButtom from './CustomButtom'

import {Primary} from './CustomButtom.stories'

describe('these are test for the <CustomButtom /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<CustomButtom {...Primary.args} />);
    })
})