import { render } from '@testing-library/react'
import InputTextOptions from './InputTextOptions'

const props = {
    listName:'listName',
    list:[],
    onClick:(value:string)=>{console.log(value)}
}

describe('these are test for the <InputTextOptions /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<InputTextOptions {...props} />);
    })
})