import { render } from '@testing-library/react'
import ScaledText from './ScaledText'
import type { ScaledTextProps } from './ScaledText'
import {textScale} from './utilis/textScale';

const scale = textScale(['Very High','High','Medium', 'Low'], ["#FF0000","#FF0000", '#edd924', 'blue']) 

const props: ScaledTextProps={
    value:'High',
    scale:scale
}

describe('these are test for the <ScaledText /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<ScaledText {...props} />);
    })
})