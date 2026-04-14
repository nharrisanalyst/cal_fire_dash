import { Link } from "react-router-dom"
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