import styles from './CityList.module.scss'
import City from '../../Atoms/City/City';
import type { CityDataType } from '../../Atoms/City/City';

type CityListProps ={
    cityData:CityDataType 
}

const CityList =({cityData}:CityListProps)=>(
    <div className={styles.citylist}>
        <ul>
            {Object.keys(cityData).sort().map((cty)=>(
                <li>
                    <City data={{[cty]:cityData[cty]}} />
                </li>
            ))}
         </ul>
    </div>
)

export default CityList;