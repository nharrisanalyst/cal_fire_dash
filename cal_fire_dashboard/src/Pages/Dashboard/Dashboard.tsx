import { useParams } from 'react-router-dom';
import { useGetDashboardData } from '../../hooks/useGetDashboardData';
import FireDash from '../../Components/Organisms/FireDash/FireDash';
import styles from './dashbaordPage.module.scss'


const DashboardPage =()=>{
    const { zipcode } = useParams();
    const [ data, loading ] = useGetDashboardData(zipcode);
    
    console.log('the dashboard data', data)
    if(loading==='Loading Data') return (<div>...Loading</div>)
    if(loading==='Data Err') return (<div>Error Loading Data</div>)
    if(loading==='Data Loaded') return(
        <div className={styles.dashboardPage}>
            <div className={styles.title} > Dashboard Portal for {zipcode} </div>
            <div className={styles.dashboard} >
              <FireDash {...data} />
            </div>
        </div>
    )
}

export default DashboardPage;