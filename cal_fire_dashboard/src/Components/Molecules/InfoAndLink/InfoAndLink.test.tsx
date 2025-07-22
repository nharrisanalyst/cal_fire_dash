import { render, screen } from '@testing-library/react'
import InfoAndLink from './InfoAndLink'
import { MemoryRouter } from 'react-router-dom';

import { Primary } from './InfoAndLink.stories';

describe('these are test for the <InfoAndLink /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
        <MemoryRouter>
            <InfoAndLink {...Primary.args} />
        </MemoryRouter>
    );
    })
})