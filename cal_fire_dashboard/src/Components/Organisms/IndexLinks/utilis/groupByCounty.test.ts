import { groupByCounty } from "./groupByCounty";
import { CountyDataType } from "../../../Atoms/County/County"

import zipData from '../../../../__mocks__/zipplainmock.json'

describe('test for groupByCountyData', ()=>{
    it('takes zipcode data and returns the county properly grouped', ()=>{
        //arrange
        const data =zipData.data.filter(d=>d.county==="Placer")
        

        const want:CountyDataType  ={
            'Placer':{
                'Rocklin':[95677, 95765],
                "Loomis":[95650],
                "Lincoln":[95648],
                "Roseville":[95661, 95678, 95747]
            }
        }

        const citiesWanted = Object.keys(want['Placer'])
        const dataFilteredMore = data.filter(d=> citiesWanted.includes(d.city))

        //act
        const get = groupByCounty(dataFilteredMore);
        //assert
        expect(get).toEqual(want)

    })
})