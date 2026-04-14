import type { MouseEvent } from 'react';
import styles from './CustomButtom.module.scss'

type CustomButtomProps ={
    buttonLabel:string;
    handleButtonClick?:(e:MouseEvent<HTMLButtonElement>) => void;
    value?:string;
    type?:"submit" | "reset" | "button" | undefined;
}

const CustomButtom =({buttonLabel, 
                    handleButtonClick,
                      value='',
                      type=undefined
                    }:CustomButtomProps)=>{
    
    const handleClick =(e:MouseEvent<HTMLButtonElement>)=>{
        if(handleButtonClick) handleButtonClick(e);
    }
    
   return(                       
    <div className={styles.custombuttom}>
        <button className={styles.custombuttomButton} type={type} value={value} onClick={handleClick}>{buttonLabel}</button>
    </div>
     )   
    }


export default CustomButtom;