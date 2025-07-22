import styles from './HomeInfoBlocks.module.scss'
import InfoAndLink from '../../Molecules/InfoAndLink/InfoAndLink';


const HomeInfoBlocks =()=>(
    <div className={styles.homeinfoblocks}>
        <InfoAndLink
            linkText='Get Home Insurance'
            linkTo='/getHomeIns'
        >
            <h3>
                Buy Home Insurance
            </h3>
        </InfoAndLink>
        <InfoAndLink
            linkText='Find an Agent'
            linkTo='/findAInsAgent'
        >
            <h3>Find a Local Agent</h3>
            <div>
                Finding home Insurance in California can be a difficult process work with our vetted agents to walk you through the process and find a policy at a price that works for you.
            </div>
        </InfoAndLink>
    </div>
)

export default HomeInfoBlocks;