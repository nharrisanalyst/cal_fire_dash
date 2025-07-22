import { Link } from 'react-router'
import {City} from '../City/City'
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
            {
                Object.keys(data[county]).map((cty)=>(
                    <City data={{[cty]:data[county][cty]}} />
                ))
            }
        </div>
    )
}

export default County;