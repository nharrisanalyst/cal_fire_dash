import {useState} from 'react';
import {useGetAlerts} from '../../hooks/useGetAlerts';
import Alert from '../Alert/Alert';
import { removeEventFromHeadline } from './utilis/removeEventFromHeadline';

import alertI18n from '../../i18n/Alerts.i18n.json';
import styles from './AlertMessage.module.scss';

interface AlertMessageProps{
  zipcode:string;
} 

type Message = {
  event:string;
  headline:string |null;
  description?:string;
  instruction?:string | null;
  geocode?:{
    SAME:string[];
  }
}

type AlertSize ='FullyOpen' | 'Truncated';

const AlertMessage = ({zipcode}:AlertMessageProps)=>{
  const[alertSize, setAlertSize] = useState<AlertSize>('Truncated');

  const {
    data:fireAlerts,
    isLoading,
    isError,
    error
  } = useGetAlerts(zipcode);

  const handleReadButton =()=>{
     const newAlertSize = alertSize === 'Truncated'?'FullyOpen':'Truncated';
     setAlertSize(newAlertSize);
  }

  if(isError  || error){
       return(
       <div className={styles.fireAlert}>
        <span>There was an Error Loading Alert Data</span>
        <button>retry</button>
      </div>
    )
  }

  if(isLoading || !fireAlerts){
    return(
      <div className={styles.fireAlert}>
        <span>...Loading</span>
      </div>
    )
  }

  const foundFireAlerts:boolean = fireAlerts.length>0;
  const message:Message = foundFireAlerts?fireAlerts[0]: alertI18n.alerts.noWarnings;
  const activeAlert = foundFireAlerts?'active' : 'inactive';
  const events = `${message.event} Affecting ${zipcode}`
  const headline =message?.headline??"";
  const headline_formatted = removeEventFromHeadline(events,headline);
  const description = message?.description??"";
  const instruction = message?.instruction??"";
 
  const buttonText = alertSize === 'Truncated'?'Read Full Alert Warning':'Read Less';
  const buttonShowClass = alertSize === 'Truncated'?`${styles.hiddenDescription}`:`${styles.showDescription}`;

  return( 
      <div className={styles.fireAlert} role='fire-alert'>
        <div className={styles.activeAlertCont}>
          <Alert status={activeAlert} />
        </div>
        <div className={styles.alertInfo}>
          <div className={styles.alertEvent} data-testid='alert-event-321'>{events}</div>
          <div className={styles.alertHeadline} data-testid='alert-headline-321'>{headline_formatted}</div>
          <div className={`${styles.alertDescription} ${buttonShowClass}`}  data-testid='alert-description-321'>{description}</div>
          <div className={styles.alertInstruction} data-testid='alert-instruction-321'>{instruction}</div>
        </div>

            {foundFireAlerts?(<button className={styles.alertButton} onClick={handleReadButton}>{buttonText}</button>):null}    
      </div>
  )

}

export default AlertMessage;