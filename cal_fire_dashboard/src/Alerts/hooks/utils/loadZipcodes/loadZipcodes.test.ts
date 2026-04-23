import {test} from 'vitest';
import { loadZipcodes } from './loadZipcodes';

test('test that zipcodes load from /json/zip_cname.json', async ()=>{
    const zipcodes = await loadZipcodes();
    expect(zipcodes['95677']).toBeDefined();
})