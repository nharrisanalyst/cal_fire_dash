import {useMemo} from 'react';
import styles from './ScaledText.module.scss'
import {textScale} from './utilis/textScale';

export const scale = textScale(['Very High', 'High','Medium', 'Low'], [' #f52020',' #f52020',' #edd924', ' #0e81ed'])

export type ScaledTextProps ={
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