import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useGetDashboardData } from '../../hooks/useGetDashboardData';
import { useSearchSuggestion } from '../../hooks/useSeachSuggestion'
import FireDash from '../../Components/Organisms/FireDash/FireDash';
import TitleAndMeta from './TitleAndMeta/TitleAndMeta';
import AlertMessage from '../../Alerts/components/AlertMessage/AlertMessage';
import styles from './dashbaordPage.module.scss'


const DashboardPage =()=>{
    const { zipcode } = useParams();

    const {
        data,
        isLoading,
        isError,
        error
    } = useGetDashboardData(zipcode);

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
    
    if(isLoading) return (<div>...Loading</div>)
    if(isError && error instanceof Error) return (<div>Error Loading Data {error.message} </div>)
    if(isError) return (<div>Error Loading Data</div>)
    if(!zipcode)return (<div>no zipcode provided</div>)
    if(!isLoading && zipcode && zipCity && zip && city) return(
        <div className={styles.dashboardPage}>
            <TitleAndMeta
                zip={zip}
                city={city}
                state='California'
            />
            <h1 className={styles.title} > {`${zipCity}, CA`} </h1>
            <div className={styles.dashLive}>
            <div className={styles.titleUnder} > Live Fire Alerts  </div>
            <AlertMessage zipcode={zipcode} />
            </div>
            <div className={styles.titleUnder} > Fire Risk Data </div>
            <div className={styles.dashboard} >
              <FireDash {...{...data, zipcode:zipcode}} />
            </div>
        </div>
    )
}

export default DashboardPage;