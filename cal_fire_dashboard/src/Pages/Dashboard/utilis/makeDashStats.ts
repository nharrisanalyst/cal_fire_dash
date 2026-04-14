import { scaleNumToText } from '../../../utilis/fhszRankingScale'
import type { TopStat } from '../../../Components/Organisms/FireDash/FireDash'
import type { LineChartItem } from '../../../Components/Viz/ChartCont/ChartRenderer'
import type { ZipCodeData,  DataAvg} from '../../../api/models'
import type { PPCLine, FireRisk, PPCLineData, FireRiskData } from '../../../api/models'
import { apiToLineData } from '../../../Components/Viz/MultiLineChart/utilis/apiToLineData'



import dataPres from '../../../api/dataPresentation.json'

export const makeDashTopStats=(zipData:ZipCodeData[], avgData:DataAvg[]):TopStat[] =>{
        //sort data  by year
        const sortedZipData = zipData.sort((a,b)=>a.year-b.year);
        const sortedAvgData = avgData.sort((a,b)=>a.year-b.year);
        //extract the most recent year
        const recentZip = sortedZipData[sortedZipData.length - 1];
        const recentAvg = sortedAvgData[sortedAvgData.length - 1];
        //keys for the data we want to display in the top
        const keysForData:string[] =['fhsz_ranking', 'ppc_class', 'fire_risk', 'non_cat_fire_losses']
        // using keys to make the data
        const topStatData:TopStat[] = keysForData.map((key:string)=>{
            if(key === 'fhsz_ranking'){
                return{
                    title:dataPres.dataPresentations.titles[key],
                    dataInfo:dataPres.dataPresentations.info[key],
                    value:scaleNumToText(recentZip[key])
                }
            }else if( key==='ppc_class' || key==='fire_risk' || key==='non_cat_fire_losses'){
                return{
                    title:dataPres.dataPresentations.titles[key],
                    dataInfo:dataPres.dataPresentations.info[key],
                    value:String(recentZip[key]),
                    avg:recentAvg[key]
                }
            }
            // default return if data keys are changed but if statements are unchanged
            return {
                title:'default',
                dataInfo:'default',
                value:'default'
            }
        })

        return topStatData;
}

// todo make this function except a list of keys
export const makeDashLineData = (zipData:ZipCodeData[], avgData:DataAvg[]):LineChartItem[] =>{
    const keys = ['ppc_class', 'fire_risk'];
    const keytoType: Map<string,LineChartItem['type']> = new Map();
          keytoType.set('ppc_class', 'ppc'); 
          keytoType.set('fire_risk', 'fire');
        
        const lineChartItems:LineChartItem[] = keys.map((key,_)=>{
            if(key === 'ppc_class'){
            return{
                type:'ppc',
                title:dataPres.dataPresentations.lineChartData[key].title,
                dataInfo:dataPres.dataPresentations.info[key],
                lineProps:{
                    legendItems: dataPres.dataPresentations.lineChartData[key].legendItems,
                    x:(d:PPCLine)=>+d.year,
                    ylist:[
                        (d:PPCLine)=>d.ppc_class,
                        (d:PPCLine)=>d.ppc_average
                        
                    ],
                    yLabel: dataPres.dataPresentations.lineChartData[key].yLabel,
                    xLabel: dataPres.dataPresentations.lineChartData[key].xLabel,
                    data: apiToLineData<PPCLineData>(zipData, avgData, 'ppc_class'),
                    numTicks: apiToLineData<PPCLineData>(zipData, avgData, 'ppc_class').length,
                    height: "100%",
                    width: '100%',
                    colorScale: (i:number)=>['black', 'grey'][i],
                    xFormat: (d: number | Date) => {
                        if(typeof d === 'number'){
                            return String(d);
                        }
                        return new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(d);

                        }
                    }
            }
            }else if(key === 'fire_risk'){
                return {
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
                    data: apiToLineData<FireRiskData>(zipData, avgData, 'fire_risk'),
                    numTicks: apiToLineData<FireRiskData>(zipData, avgData, 'fire_risk').length,
                    height: "100%",
                    width: '100%',
                    colorScale: (i:number)=>['black', 'grey'][i],
                    xFormat: (d: number | Date) => {
                        if(typeof d === 'number'){
                            return String(d);
                        }
                        return new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(d);

                        }
                    }
            }
        }
        //default return 
        return {
                type:'ppc',
                title:dataPres.dataPresentations.lineChartData['ppc_class'].title,
                dataInfo:dataPres.dataPresentations.info['ppc_class'],
                lineProps:{
                    legendItems: dataPres.dataPresentations.lineChartData['ppc_class'].legendItems,
                    x:(d:PPCLine)=>+d.year,
                    ylist:[
                        (d:PPCLine)=>d.ppc_class,
                        (d:PPCLine)=>d.ppc_average
                        
                    ],
                    yLabel: dataPres.dataPresentations.lineChartData['ppc_class'].yLabel,
                    xLabel: dataPres.dataPresentations.lineChartData['ppc_class'].xLabel,
                    data: apiToLineData<PPCLineData>(zipData, avgData, 'ppc_class'),
                    numTicks: apiToLineData<PPCLineData>(zipData, avgData, 'ppc_class').length,
                    height: "100%",
                    width: '100%',
                    colorScale: (i:number)=>['black', 'grey'][i],
                    xFormat: (d: number | Date) => {
                        if(typeof d === 'number'){
                            return String(d);
                        }
                        return new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(d);

                        }
                    }
            }
    })

    return lineChartItems;
}