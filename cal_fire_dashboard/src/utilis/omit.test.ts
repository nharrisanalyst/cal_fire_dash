import {omit} from './omit'

describe('these are test for the ts function omit()', ()=>{
    it('takes an object and keys and returns an the same object minus the passed keys', ()=>{
        const start = {
            name:'example',
            age:17,
            wage:175000
        }
        const want = {
             name:'example',
            age:17
        }
        const get = omit(start,'wage');
        expect(get).toEqual(want);
    })
})