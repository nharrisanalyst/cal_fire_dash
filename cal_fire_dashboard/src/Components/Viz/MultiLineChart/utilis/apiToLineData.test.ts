import type { PPCLineData } from "../../../../api/models"
import type { DataAvgList } from "../../../../api/models"
import type { ZipCodeDataList } from "../../../../api/models"
import { apiToLineData } from './apiToLineData'
import type{ PPCLineData } from "../../../../api/models"

//json data 
import avgDataJSON from '../../../../__mocks__/avgMock.json'
import zipCodeData from '../../../../__mocks__/zipcodeMock.json'

describe('this is test for apiToLineData()',()=>{
    it('takes data from the api and returns data for the PPC Chart', ()=>{
        //arrange
        const rawData:ZipCodeDataList = zipCodeData
        const avgData:DataAvgList = avgDataJSON

        const want:PPCLineData = [{
            year:new Date('01/01/2018'),
            ppc_class:2.07,
            ppc_average:3.67,
        },{
            year:new Date('01/01/2019'),
            ppc_class:2.05,
            ppc_average:3.57,
        },{
            year:new Date('01/01/2020'),
            ppc_class:2.03,
            ppc_average:3.49,
        },{
            year:new Date('01/01/2021'),
            ppc_class:1.53,
            ppc_average:2.48,
        },{
            year:new Date('01/01/2022'),
            ppc_class:1.48,
            ppc_average:2.4,
        },{
            year:new Date('01/01/2023'),
            ppc_class:1.47,
            ppc_average:2.41,
        }


        ]
        //act
        const get =  apiToLineData<PPCLineData>(rawData.data,avgData.avg_data,'ppc_class');
        //assert
        expect(get).toEqual(want)
    })
})