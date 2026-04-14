import {useState} from 'react'
import type { MouseEvent } from 'react'
import styles from './Hamburger.module.scss'


export type OpenClose = 'OPEN'|'CLOSED';

type HamburgerProps ={
    showUI:(openClose:OpenClose) =>void
}

const Hamburger =({showUI}:HamburgerProps)=>{
  const [openState, setOpenState] = useState<OpenClose>('CLOSED');

  const handleOnClick =(e:MouseEvent<HTMLElement>)=>{
    e.preventDefault();
    if(openState === 'CLOSED'){
      const currentOpenState:OpenClose = 'OPEN'
      setOpenState(currentOpenState);
      showUI(currentOpenState)
    }else{
      const currentOpenState:OpenClose = 'CLOSED'
      setOpenState(currentOpenState);
      showUI(currentOpenState)
    }
  }
  
    return (
        
      <div className={styles.hamburger} onClick={handleOnClick}>
        {openState === 'CLOSED'?(
          <span className={styles.hamburgerIcon}>
            <span></span>
            <span></span>
            <span></span>
          </span>):null}
          {openState === 'OPEN'?(
          <span className={styles.closeX}>
              &#x2715;
          </span>):null}
      </div>
    )
}

export default Hamburger;