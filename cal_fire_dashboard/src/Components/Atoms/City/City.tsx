import {Link} from 'react-router-dom'
import ZipcodeList from '../../Molecules/ZipcodeList/ZipcodeList';
import styles from './City.module.scss'

export type CityDataType = {
    [city:string]:number[];
}

type CityProps ={
    data:CityDataType
}

const City =({data}:CityProps)=>{
    const city = Object.keys(data)[0];
    return(
        <div className={styles.city}>
            <Link to={`/cities/${city}`} ><h1>{city}</h1></Link>
            <ZipcodeList zipcodeList={data[city].map((d)=>(d))} />
    </div>
    )
}

export default City;