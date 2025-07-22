import styles from './IndexLinks.module.scss'
import Zipcode from '../../Atoms/Zipcode/Zipcode';
import ZipcodeList from '../../Molecules/ZipcodeList/ZipcodeList';
import City from '../../Atoms/City/City';
import { useGetZipCodes } from '../../../hooks/useGetZipcodes';
import { groupByCity } from './utilis/groupByCity';
import { useLocation } from "react-router";



const IndexLinks =()=>{
    const params = useLocation();
    console.log(params, 'these are the params')
    const pathName = params.pathname;
    const dataToGroupBy = pathName.split("/")[1]
    const [ data, loading ] = useGetZipCodes();
    if(loading === 'Loading Data') return(<div>...Loading</div>)
    
    if(loading === 'Data Loaded'){

        if(dataToGroupBy==='zipcodes'){
            return(
                <div className={styles.indexlinks}>
                    <h1>Zipcodes:</h1>
                    <ZipcodeList zipcodeList={data.map((d)=>(d.zipcode))} />
                </div>
            )
        }
        if(dataToGroupBy==='cities'){
            const cityData = groupByCity(data);
            return (
                <div className={styles.indexlinks}>
                    <ul>
                    {Object.keys(cityData).map((cty)=>(
                        <li>
                            <City data={{[cty]:cityData[cty]}} />
                        </li>
                    ))}
                    </ul>
                </div>
            )
        }
        if(dataToGroupBy=='county'){
            return (
                <div className={styles.indexlinks}>county</div>
            )
        }
        return(
            <div className={styles.indexlinks}>
            404 Error Page not found
            </div>
        )
    }
    if(loading==='Data Err'){
        return (<div>Error Loading Data</div>)
    }
}

export default IndexLinks;