import { Link } from 'react-router'
import CityList from '../../Molecules/CityList/CityList';
import styles from './County.module.scss'

export type CountyDataType = {
      [county:string]:{
        [city:string]:number[];
      };
}

type CountyProps = {
    data:CountyDataType
}


const County =({data}:CountyProps)=>{
   const county = Object.keys(data)[0];

    return(
        <div className={styles.county}>
            <h1><Link to={`/counties/${county}`}>{county}</Link></h1>
            <CityList cityData={data[county]} />
        </div>
    )
}

export default County;