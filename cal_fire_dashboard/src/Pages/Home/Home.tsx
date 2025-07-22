import styles from './home.module.scss'
import ImageInput from "../../Components/Molecules/ImageInput/ImageInput" 
import HomeInfoBlocks from '../../Components/Organisms/HomeInfoBlocks/HomeInfoBlocks'

const Home =()=>(

        <div className={styles.home}>
            <ImageInput />
            <div className={styles.homeBreakHeader}>
                <div style={{paddingBottom:'6px'}}>
                    1 in 8 Californians, or about 5.1 million people, live in the two most dangerous wildfire zones. 
                </div>
                <div>
                   Understand your fire risk, to protect what matters, insure wisely, and save where you can.
                </div>
            </div>
            <div className={styles.homeInfoBlocks}>
            <HomeInfoBlocks />
            </div>
            
        </div>
)

export default Home