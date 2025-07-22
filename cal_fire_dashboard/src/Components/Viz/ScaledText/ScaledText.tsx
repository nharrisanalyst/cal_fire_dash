import {useMemo} from 'react';
import styles from './ScaledText.module.scss'
import {textScale} from './utilis/textScale';

export const scale = textScale(['High','Medium', 'Low'], [' #FF0000',' #FFFF00', ' #E0B0FF'])

type ScaledTextProps ={
  value:string
  scale:(text:string)=>string;
}

const ScaledText =({value, scale}:ScaledTextProps)=>{
  const color = useMemo(()=>scale(value), [value,scale]);
  return(
      <div className={styles.scaledtext}>
        <span style={{color:color}}>{value}</span>
      </div>
  )
}

export default ScaledText;