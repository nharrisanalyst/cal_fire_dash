import styles from './FireDash.module.scss'
import DashStatCont  from '../../Viz/DashStatCont/DashStatCont'
import ScaledText, {scale as colorScale} from '../../Viz/ScaledText/ScaledText'
import type { DashStatContProps } from '../../Viz/DashStatCont/DashStatCont'
import ChartRenderer  from '../../Viz/ChartCont/ChartRenderer'
import FireMap from '../../Viz/FireMap/FireMap'
import type { LineChartItem } from '../../Viz/ChartCont/ChartRenderer'

import { omit } from '../../../utilis/omit'


export type TopStat = DashStatContProps & {value:string}


export type FireDashProps ={
    topStats:TopStat[];
    lineCharstItems:LineChartItem[];
    zipcode:number|string|undefined;
}

const FireDash =({topStats, lineCharstItems, zipcode}:FireDashProps)=>(
    <div className={styles.firedash}>
      <div className={styles.dashStats}>
        {topStats.map((d:TopStat, i:number)=>(
          <div key={`${d.title}-${i}`} className={styles.dashStat}> 
            <DashStatCont {...omit(d, 'value')} >
              <ScaledText value={String(d.value)} scale={(value:string)=>i===0?colorScale(value):'black'} />
            </DashStatCont>
          </div>
        ))}
      </div>
      <div className={styles.lineCharts}>
        {lineCharstItems.map((item, i:number)=>(
          <div key={i}>{ChartRenderer[item.type](item)}</div>
        ))
        }
      </div>
      <div className={styles.fireMapCont}>
       {zipcode && <FireMap zipcode={String(zipcode)}  />}
      </div>
    </div>
)

export default FireDash;