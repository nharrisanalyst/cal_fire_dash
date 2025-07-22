import type { FireRiskData } from "../../../../api/models"
import type { DataAvgList } from "../../../../api/models"
import type { ZipCodeDataList } from "../../../../api/models"
import { apiToLineDataFire } from './apiToLineData'
 
//json data 
import avgDataJSON from '../../../../__mocks__/avgMock.json'
import zipCodeData from '../../../../__mocks__/zipcodeMock.json'

describe('this is test for apiToLineDataFire()',()=>{
    it('takes data from the api and returns data for the Fire Chart', ()=>{
        const rawData:ZipCodeDataList = zipCodeData
        const avgData:DataAvgList = avgDataJSON
        

        // year:number;
        // fire_risk:number;
        // fire_risk_average:number;
        const want:FireRiskData = [{
            year:new Date('01/01/2018'),
            fire_risk:0.82,
            fire_risk_average:1.06,
        },{
            year:new Date('01/01/2019'),
            fire_risk:0.79,
            fire_risk_average:1.06,
        },{
            year:new Date('01/01/2020'),
            fire_risk:0.7,
            fire_risk_average:1.01,
        },{
            year:new Date('01/01/2021'),
            fire_risk:0.7,
            fire_risk_average:1.03,
        },{
            year:new Date('01/01/2022'),
            fire_risk:0.72,
            fire_risk_average:1.04,
        },{
            year:new Date('01/01/2023'),
            fire_risk:0.74,
            fire_risk_average:1.06,
        }


        ]
        const get =  apiToLineDataFire(rawData,avgData)
        expect(get).toEqual(want)
    })
})