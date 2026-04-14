import { render } from '@testing-library/react'
import CountyList from './CountyList'
import { MemoryRouter } from 'react-router-dom';

import { Primary } from './CountyList.stories';

describe('these are test for the <CountyList /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
       <MemoryRouter>
            <CountyList {...Primary.args} />
        </MemoryRouter>
        );
    })
})