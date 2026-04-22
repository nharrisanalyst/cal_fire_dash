import styles from './Alerts.module.scss';

interface AlertProps {
  status: 'active' | 'inactive';
}

const Alert =({status}:AlertProps)=>{
  const className =status ==='active'?`${styles.activeAlert} ${styles.alertAlert}`:`${styles.inactiveAlert} ${styles.alertAlert}`
  return(
    <div data-testid="alert-icon-321" className={className}>
      <span>Alert</span><div></div>
    </div>
  )
}

export default Alert