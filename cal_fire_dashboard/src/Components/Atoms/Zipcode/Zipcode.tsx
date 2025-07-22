import { Link } from 'react-router'
import styles from './Zipcode.module.scss'

type ZipcodeProps ={
    zipcode:number
}

const Zipcode =({zipcode}:ZipcodeProps)=>(
    <div className={styles.zipcode}>
        <Link to={`/dashboard/${zipcode}`}><span>{zipcode}</span></Link>
    </div>
)

export default Zipcode;