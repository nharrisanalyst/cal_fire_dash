import { Link } from 'react-router-dom';
import Fire from './flames-icon.svg?react'
import styles from './icon.module.scss';

const Icon =()=>(
    <div className={styles.icon}>
       <Link to="/" ><Fire /><span className={styles.iconText}>Cal Fire Portal</span></Link> 
    </div>
)

export default Icon;