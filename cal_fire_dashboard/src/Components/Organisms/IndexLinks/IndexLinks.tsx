import styles from './IndexLinks.module.scss'
import ZipcodeList from '../../Molecules/ZipcodeList/ZipcodeList';
import CityList from '../../Molecules/CityList/CityList';
import CountyList from '../../Molecules/CountyList/CountyList'
import { useGetZipCodes } from '../../../hooks/useGetZipcodes';
import { groupByCity } from './utilis/groupByCity';
import { groupByCounty } from './utilis/groupByCounty';
import { useLocation } from "react-router-dom";



const IndexLinks =()=>{
    const params = useLocation();
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
                     <h1>Cities:</h1>
                    <CityList  cityData={cityData} />
                </div>
            
            )
        }
        if(dataToGroupBy=='counties'){
            const countyData = groupByCounty(data);
            return (
                    <div className={styles.indexlinks}>
                        <h1>Counties:</h1>
                        <CountyList countyData={countyData} />
                    </div>
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