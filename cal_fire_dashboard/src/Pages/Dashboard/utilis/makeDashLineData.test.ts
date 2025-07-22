import {makeDashLineData} from './makeDashStats'
import type { LineChartItem } from '../../../Components/Viz/ChartCont/ChartRenderer'
import type { PPCLine, FireRisk, PPCLineData, FireRiskData } from '../../../api/models'


import zipdata from '../../../__mocks__/zipcodeMock.json'
import avgMock from '../../../__mocks__/avgMock.json'
import { apiToLineData } from '../../../Components/Viz/MultiLineChart/utilis/apiToLineData'

import dataPres from '../../../api/dataPresentation.json'

describe('these are test for the makeDashLineData()', ()=>{
    it('takes zipdata and avg data and returns the data for the lineCharts in the dashboad', ()=>{
        //arrange

        const want:LineChartItem[] =[
            {
                type:'ppc',
                title:dataPres.dataPresentations.lineChartData.ppc_class.title,
                dataInfo:dataPres.dataPresentations.info.ppc_class,
                lineProps:{
                    legendItems: dataPres.dataPresentations.lineChartData.ppc_class.legendItems,
                    x:(d:PPCLine)=>+d.year,
                    ylist:[
                        (d:PPCLine)=>d.ppc_class,
                        (d:PPCLine)=>d.ppc_average
                    ],
                    yLabel: dataPres.dataPresentations.lineChartData.ppc_class.yLabel,
                    xLabel: dataPres.dataPresentations.lineChartData.ppc_class.xLabel,
                    data: apiToLineData<PPCLineData>(zipdata.data, avgMock.avg_data, 'ppc_class'),
                    numTicks: apiToLineData<PPCLineData>(zipdata.data, avgMock.avg_data, 'ppc_class').length,
                    height: "100%",
                    width: '100%',
                    colorScale: (d:PPCLine, i:number)=>['black', 'grey'][i],
                    xFormat: (d: number | Date) => {
                        if(typeof d === 'number'){
                            return String(d);
                        }
                        return new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(d);

                        }
                    }
            },
            {
                type:"fire",
                title:dataPres.dataPresentations.lineChartData.fire_risk.title,
                dataInfo:dataPres.dataPresentations.info.fire_risk,
                lineProps:{
                    legendItems: dataPres.dataPresentations.lineChartData.fire_risk.legendItems,
                    x:(d:FireRisk)=>+d.year,
                    ylist:[
                        (d:FireRisk)=>d.fire_risk,
                        (d:FireRisk)=>d.fire_risk_average
                    ],
                    yLabel: dataPres.dataPresentations.lineChartData.fire_risk.yLabel,
                    xLabel: dataPres.dataPresentations.lineChartData.fire_risk.xLabel,
                    data: apiToLineData<FireRiskData>(zipdata.data, avgMock.avg_data, 'fire_risk'),
                    numTicks: apiToLineData<FireRiskData>(zipdata.data, avgMock.avg_data, 'fire_risk').length,
                    height: "100%",
                    width: '100%',
                    colorScale: (d:FireRisk, i:number)=>['black', 'grey'][i],
                    xFormat: (d: number | Date) => {
                        if(typeof d === 'number'){
                            return String(d);
                        }
                        return new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(d);

                        }
                    }
            }

        ]
        //act
        const get =  makeDashLineData(zipdata.data, avgMock.avg_data)

        //assert
        expect(JSON.stringify(get)).toEqual(JSON.stringify(want))
    })
})