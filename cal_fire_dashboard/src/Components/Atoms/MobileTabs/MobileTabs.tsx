import type {ComponentType} from 'react'
import styles from './MobileTabs.module.scss'

type MobileTabItem ={
    text:string; 
    onClick:()=>void;
    SVG:ComponentType
}

type MobileTabsProps ={
     mobileTabs:Array<MobileTabItem>
}

const MobileTabs =({mobileTabs}:MobileTabsProps)=>(
    <div className={styles.mobiletabs}>
        {mobileTabs.map((t)=>{
            const SVG = t.SVG;
            return(
            <div key={`${t.text}-${Math.random()}`} className={styles.mobileTab} onClick={t.onClick} >
              <span className={styles.mobileTabSVG}><SVG/></span> <span className={styles.mobileTabText}>{t.text}</span>
            </div>
            );
        })}
    </div>
)


export default MobileTabs;