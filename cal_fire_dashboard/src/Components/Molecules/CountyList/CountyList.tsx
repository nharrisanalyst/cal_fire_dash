import styles from './CountyList.module.scss'
import type { CountyDataType } from '../../Atoms/County/County';
import County from '../../Atoms/County/County';

type CountyListProps ={
 countyData:CountyDataType 
}

const CountyList =({countyData}:CountyListProps)=>(
    <div className={styles.countylist}>
        {
            Object.keys(countyData).sort().map((cnty)=>(
                <County data={{[cnty]:countyData[cnty]}} />
            ))
        }
    </div>
)

export default CountyList;