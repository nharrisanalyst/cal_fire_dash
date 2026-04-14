import { useEffect, useState} from 'react'
import { delay } from './utilis/delay'

import styles from './Loading.module.scss'

type LoadingProps ={
    loadingText:string;
}

const Loading =({loadingText}:LoadingProps)=>{
    const [show, setShow]= useState<'show'|'do not show'>('show');
    
    useEffect(()=>{
       let runLoop = true;
        const blink =async()=>{
            await delay(1000);
            while(runLoop){
                
                if(show==='show') setShow('do not show');
                if(show==='do not show') setShow('show')
                await delay(1000);
            }
        }
        blink();
        return()=>{
            runLoop= false;
        };
    })

    return(
    <div className={styles.loading}>
      {show ==='show'? loadingText:null}
    </div>
    )
}

export default Loading;