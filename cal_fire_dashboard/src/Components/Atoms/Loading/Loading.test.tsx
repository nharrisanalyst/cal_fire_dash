import { render } from '@testing-library/react'
import Loading from './Loading'

describe('these are test for the <Loading /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<Loading loadingText={"...Loading"} />);
    })
})