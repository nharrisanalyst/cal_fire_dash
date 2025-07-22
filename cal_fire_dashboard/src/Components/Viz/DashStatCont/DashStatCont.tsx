import type {ReactNode} from 'react'
import styles from './DashStatCont.module.scss'
import Info from '../../Atoms/Info/Info'
import type { InfoProps } from '../../Atoms/Info/Info'

type DashStatContType ={
    children?:ReactNode;
    title:string;
    avg?:number|string;
}

export type DashStatContProps = DashStatContType & InfoProps;

const DashStatCont =({title, children, dataInfo, avg}:DashStatContProps)=>(
    <div className={styles.dashstatcont}>
        <div className={styles.top}>
            <div className={styles.title}>{title}</div>
            <div className={styles.moreInfo}><Info dataInfo={dataInfo}/></div>
        </div>
        <div className={styles.middle}>{children}</div>
        <div className={styles.bottom}>{avg?`Avg. ${avg}`:null}</div>
    </div>
)

export default DashStatCont;