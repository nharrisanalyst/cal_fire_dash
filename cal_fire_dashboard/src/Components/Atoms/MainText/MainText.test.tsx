import { describe, it} from 'vitest';
import { render,screen } from '@testing-library/react'
import MainText from './MainText'

const props = {lineOne:'Protect Your Family.', lineTwo:'Know Your Fire Risk.',color:'black'}

describe('test for the component <MainText />',  ()=>{
    it('renders an error when line one is not provided', async ()=>{
        render(<MainText {...props} />);
    })

    it('renders all probs when they are provided with upper case', async ()=>{

        render(<MainText {...props} />);
        const lineOne = await screen.findByText('Protect Your Family.');
        const lineTwo = await screen.findByText('Know Your Fire Risk.');
        expect(lineOne).toBeInTheDocument();
        expect(lineTwo).toBeInTheDocument();
    })
})