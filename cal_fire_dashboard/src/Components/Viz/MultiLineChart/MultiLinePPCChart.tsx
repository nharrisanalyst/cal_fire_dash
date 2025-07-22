import MultiLineChart from './MultiLineChart'
import type {MultiLineChartProps} from './MultiLineChart'
import type { PPCLine, FireRisk } from '../../../api/models'

export const MultiLinePPCChart =(props:MultiLineChartProps<PPCLine>)=>(<MultiLineChart {...props}/>)
export const MultiLineFireChart =(props:MultiLineChartProps<FireRisk>)=>(<MultiLineChart {...props}/>)


