import { textScale } from './textScale'

const scale = textScale(['High','Medium', 'Low'], ["#FF0000", 'yellow', 'green'])

describe('these are test for tsxtScale()', ()=>{
    it('takes domanin string[], string range string[] => string',()=>{
        const want = "#FF0000";
        const value = 'High';
        const get = scale(value);
        expect(get).toBe(want);

    })
})