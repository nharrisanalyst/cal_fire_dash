import { groupByCity } from './groupByCity'
import type { CityDataType } from '../../../Atoms/City/City' 
import zipData from '../../../../__mocks__/zipplainmock.json'


describe('test for groupByCity', ()=>{
    it('takes a city and correctly returns zipcodes related to it', ()=>{
        //arrange
        const city = 'Rocklin';
        const data = zipData;
        const want:CityDataType ={
            'Rocklin':['95650','95663', '95677', '95765']
        }
        //act
        const get = groupByCity(data,city);

        expect(want).toEqual(get);
        
    })
})