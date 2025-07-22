import type {JSX} from 'react'
import type { MultiLineChartProps } from "../MultiLineChart/MultiLineChart";
import { MultiLinePPCChart, MultiLineFireChart } from '../MultiLineChart/MultiLinePPCChart';
import type { PPCLine, FireRisk } from '../../../api/models'
import ChartCont from './ChartCont';
import { omit } from '../../../utilis/omit';

export type LineChartItem = {
    type:'ppc',
    title:string;
    dataInfo:string;
    moreInfo?:string;
    lineProps:MultiLineChartProps<PPCLine>;
}|{
    type:'fire',
    title:string;
    dataInfo:string;
    moreInfo?:string;
    lineProps:MultiLineChartProps<FireRisk>;
}


const ChartRenderer:Record<LineChartItem['type'], 
        (item:LineChartItem)=>JSX.Element> ={
            ppc:(item)=>{
                if(item.type != 'ppc') return null as any;
                return(
                    <ChartCont {...omit(item, 'lineProps')}>
                        <MultiLinePPCChart {...item.lineProps} />
                    </ChartCont>
                )
            },
            fire:(item)=>{
                if(item.type != 'fire') return null as any;
                return(
                    <ChartCont {...omit(item, 'lineProps')}>
                        <MultiLineFireChart {...item.lineProps} />
                    </ChartCont>
                )
            }
        }


export default ChartRenderer