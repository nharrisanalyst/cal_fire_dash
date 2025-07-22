import {validateZipcode} from './validateZipcode';

describe('test for validate zipcode', ()=>{
    it('returns true with a valid zipcode', ()=>{
        const zipcode = '95677';
        const validZipcode = validateZipcode(zipcode)
        expect(validZipcode).toBeTruthy();
    })
    it('returns false with an ivalid zipcode', ()=>{
        const zipcode = '9567';
        const validZipcode = validateZipcode(zipcode)
        expect(validZipcode).toBeFalsy();
    })
})