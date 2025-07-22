import styles from './ZipcodeList.module.scss'
import Zipcode from '../../Atoms/Zipcode/Zipcode';

type ZipcodeListProps ={
    zipcodeList:number[];
}

const ZipcodeList =({zipcodeList}:ZipcodeListProps
)=>(
    <div className={styles.zipcodelist}>
         <ul className={styles.ui}>
            {zipcodeList.map((zip)=>(
                <li className={styles.li}>
                <Zipcode zipcode={zip} />
                </li>
            ))}
            </ul>
    </div>
)

export default ZipcodeList;