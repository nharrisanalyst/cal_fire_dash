import {makeDashTopStats} from './makeDashStats'
import { scaleNumToText } from '../../../utilis/fhszRankingScale'
import type { topStat } from '../../../Components/Organisms/FireDash/FireDash'

import zipdata from '../../../__mocks__/zipcodeMock.json'
import avgMock from '../../../__mocks__/avgMock.json'

import dataPres from '../../../api/dataPresentation.json'

describe('test for makeDashTopStats()', ()=>{
    it('takes zipdata and returns top 4 dashstata points with descritions annd averages and titles', ()=>{  
        const sortedZipData = zipdata.data.sort((a,b)=>a.year-b.year);
        const sortedAvgData = avgMock.avg_data.sort((a,b)=>a.year-b.year);

        //arrange
        const inputZipData = zipdata.data;
        const inputAvgData = avgMock.avg_data

        const want:topStat[] =[
            {
                title:dataPres.dataPresentations.titles.fhsz_ranking,
                dataInfo:dataPres.dataPresentations.info.fhsz_ranking,
                value:scaleNumToText(sortedZipData[sortedZipData.length -1].fhsz_ranking)
            },
            {
                title:dataPres.dataPresentations.titles.ppc_class,
                dataInfo:dataPres.dataPresentations.info.ppc_class,
                value:String(sortedZipData[sortedZipData.length -1].ppc_class),
                avg:sortedAvgData[sortedAvgData.length - 1].ppc_class
            },
            {
                title:dataPres.dataPresentations.titles.fire_risk,
                dataInfo:dataPres.dataPresentations.info.fire_risk,
                value:String(sortedZipData[sortedZipData.length -1].fire_risk),
                avg:sortedAvgData[sortedAvgData.length - 1].fire_risk
            },
            {
                title:dataPres.dataPresentations.titles.non_cat_fire_losses,
                dataInfo:dataPres.dataPresentations.info.non_cat_fire_losses,
                value:String(sortedZipData[sortedZipData.length -1].non_cat_fire_losses),
                avg:sortedAvgData[sortedAvgData.length - 1].non_cat_fire_losses
            }
        ]

        //act
        const get = makeDashTopStats(inputZipData, inputAvgData);

        //assert
        expect(get).toEqual(want);
    })
})