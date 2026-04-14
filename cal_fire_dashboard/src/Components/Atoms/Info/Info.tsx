import {useState, useRef} from 'react'
import {useClickOutside} from '../../../hooks/useClickOutside'
import styles from './Info.module.scss'


export type InfoProps = {
    dataInfo:string;
}

const Info =({dataInfo}:InfoProps)=>{
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const popUpRef = useRef<HTMLDivElement>(null);
    
    const handleMouseEnter=():void =>{
        setShowInfo(true);
    }
    
    const handleMouseLeave=():void =>{
        setShowInfo(false);
    }

    const handleOnClick=():void =>{
         setShowInfo(true);
    }

    useClickOutside(popUpRef, ()=>{
        if(showInfo) setShowInfo(false);
    })


    return(
    <div className={styles.info}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         onClick={handleOnClick}
    >
        <div>...</div>
        {showInfo?(<div  ref={popUpRef} className={styles.popup}>{dataInfo}</div>):null}
    </div>
    )
}

export default Info;