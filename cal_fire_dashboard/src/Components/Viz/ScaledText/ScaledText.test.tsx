import { render, screen } from '@testing-library/react'
import ScaledText from './ScaledText'
import type {ScaledTextProps} from './ScaledText'
import {textScale} from './utilis/textScale';

const scale = textScale(['High','Medium', 'Low'], ["#FF0000", 'yellow', 'green']) 

const props: ScaledTextProps={
    value:'High',
    scale:scale
}

export type ScaledTextProps ={
  value:string
  scale:(text:string)=>string;
}

describe('these are test for the <ScaledText /> component', ()=>{
    it('renders without crashing', ()=>{
        render(<ScaledText {...props} />);
    })
})