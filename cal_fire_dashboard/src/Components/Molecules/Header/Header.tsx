import { Link } from 'react-router-dom';
import Icon from './Component/Icon'
import styles from './header.module.scss'
import MobileNavFull from '../../Organisms/MobileNavFull/MobileNavFull';

const Header =()=>(
<div className={styles.header}>
   <span className={styles.mobileHeader}><MobileNavFull /></span>
   <div className={styles.leftSideLinks}>
     <Link to='/findanagent'><span>Find an Agent</span></Link><Link to='/buyhomeins'><span>Buy Home Ins</span></Link> <Link to='/buycarins'><span>Buy Car Ins</span></Link>
   </div>
   <Icon />
   <div className={styles.rightSideLinks}>
     <Link to='/counties'><span>Counties</span></Link><Link to='/cities'><span>Cities</span></Link> <Link to='/zipcodes'><span>Zipcodes</span></Link>
   </div>

</div>)

export default Header;