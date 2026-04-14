// @ts-nocheck
//ignoring all typescript errors in this file as this file is not completed or imported anywhere
import {useState} from 'react';
import styles from './MobileTabDash.module.scss'
import MobileTabs from '../../Atoms/MobileTabs/MobileTabs';

type MobileTabDashProps ={
    
}

const MobileTabDash =()=>{
    const [tabState, setTabState] = useState<'SELECT_MAP' | 'SELECT_STATS'>('SELECT_MAP');



    return (    
        <div className={styles.mobiletabdash}>

        </div>
    )
}

export default MobileTabDash;