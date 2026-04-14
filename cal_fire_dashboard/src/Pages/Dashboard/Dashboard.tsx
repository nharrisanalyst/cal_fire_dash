import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useGetDashboardData } from '../../hooks/useGetDashboardData';
import { useSearchSuggestion } from '../../hooks/useSeachSuggestion'
import FireDash from '../../Components/Organisms/FireDash/FireDash';
import TitleAndMeta from './TitleAndMeta/TitleAndMeta';
import styles from './dashbaordPage.module.scss'


const DashboardPage =()=>{
    const { zipcode } = useParams();
    const [ data, loading ] = useGetDashboardData(zipcode);

    const [zipCity] = useSearchSuggestion({suggestion:Number(zipcode)})
    const [zip, city] = useMemo(()=>{
        if(zipCity){
            const zipCitySplit =  zipCity.split(" ");
            const zip = zipCitySplit.shift();
            const city = zipCitySplit.join(" ");
            return [zip, city];
           
        }
        return [null,null]
    },[zipCity])
    
    if(loading==='Loading Data') return (<div>...Loading</div>)
    if(loading==='Data Err') return (<div>Error Loading Data</div>)
    if(!zipcode)return (<div>no zipcode provided</div>)
    if(loading==='Data Loaded' && zipcode && zipCity && zip && city) return(
        <div className={styles.dashboardPage}>
            <TitleAndMeta
                zip={zip}
                city={city}
                state='California'
            />
            <h1 className={styles.title} > {`${zipCity}, CA`} </h1>
            <div className={styles.titleUnder} > Fire Risk Data </div>
            <div className={styles.dashboard} >
              <FireDash {...{...data, zipcode:zipcode}} />
            </div>
        </div>
    )
}

export default DashboardPage;