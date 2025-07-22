import { useMemo } from 'react';
import { Scale } from '@unovis/ts'
import { VisXYContainer, VisLine, VisAxis, VisBulletLegend, VisScatter } from '@unovis/react'
import styles from './MultiLineChart.module.scss'
import './multilinechartcssPatch.scss'

type YAccessor<T> = (d: T) => number;


export type MultiLineChartProps<T> ={
    legendItems:string[];
    x:(d:T)=> number | null | undefined;
    ylist:YAccessor<T> [];
    yLabel:string;
    xLabel:string;
    data:T[];
    numTicks:number;
    height:string;
    width:string;
    colorScale:(d:T, i:number)=>string|null|undefined;
    xFormat:(t:number|Date)=>string;
}

const MultiLineChart = <T,>({legendItems,x,ylist,yLabel,xLabel,data,numTicks,height, width, colorScale, xFormat}:MultiLineChartProps<T>)=>{
    const legendItemsMap = legendItems.map((d,i:number)=>({name:d, color:colorScale(d,i)}))
    const xScale = useMemo(()=>Scale.scaleTime(), [])
    

   return(
        <div className={`${styles.multilinechart} multi-line`}>
          <div className={styles.legend}>
            <VisBulletLegend items={legendItemsMap} color={colorScale} />
          </div>
            <div className={styles.xyContainer}>
            <VisXYContainer data={data} height={height} width={width} xScale={xScale}>
              <VisLine
                duration={0}
                color={colorScale}
                x={x}
                y={ylist}/>
                {ylist.map((cb,i)=>(
                  <VisScatter duration={0} x={x} y={cb} label={(d:T)=> String(cb(d))} color={colorScale(cb,i)} />
                ))}
              <VisAxis type="x" label={xLabel} numTicks={numTicks} tickFormat={xFormat}/>
              <VisAxis type="y" label={yLabel}/>
            </VisXYContainer>
            </div>
        </div>
   )
}

export default MultiLineChart;