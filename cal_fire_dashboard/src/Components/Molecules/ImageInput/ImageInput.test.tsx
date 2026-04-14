import { render } from '@testing-library/react'
import ImageInput from './ImageInput'
import { MemoryRouter } from 'react-router-dom';

describe('these are test for the <ImageInput /> component', ()=>{
    it('renders without crashing', ()=>{
        render(
        <MemoryRouter>
            <ImageInput />
        </MemoryRouter>
        );
    })
})