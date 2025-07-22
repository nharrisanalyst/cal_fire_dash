import type {ReactNode} from 'react'
import Info from '../../Atoms/Info/Info'
import styles from './ChartCont.module.scss'


export type ChartContProps ={
    children?:ReactNode;
    title:string;
    dataInfo:string
    moreInfo?:string
}

const ChartCont =({children, title, dataInfo, moreInfo}:ChartContProps)=>(
    <div className={styles.chartcont}>
        <div className={styles.top}>
            <div className={styles.felxone}></div>
            <div className={styles.title}>{title}</div>
            <div className={styles.moreInfo}><Info dataInfo={dataInfo}/></div>
        </div>
        <div className={styles.middle}>{children}</div>
        <div className={styles.bottom}>{moreInfo?moreInfo:null}</div>
    </div>
)

export default ChartCont;