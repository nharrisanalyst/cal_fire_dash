import { useState } from 'react';
import styles from './MobileNavFull.module.scss';
import Hamburger from '../../Atoms/Hamburger/Hamburger';
import type {OpenClose} from '../../Atoms/Hamburger/Hamburger';
import MobileNav from '../../Molecules/MobileNav/MobileNav';
import type { MobileNavItem } from  '../../Molecules/MobileNav/MobileNav';

const navLinks:MobileNavItem[] =[
      {
        text:'Find an Agent',
        linkPath:'/findanagent'
      },
      {
        text:'Buy Home Ins',
        linkPath:'/buyhomeins'
      },
     {
        text:'Buy Car Ins',
        linkPath:'/buycarins'
      },
      {
        text:'Counties',
        linkPath:'/counties'
      },
      {
        text:'Cities',
        linkPath:'/cities'
      },
     {
        text:'Zipcodes',
        linkPath:'/zipcodes'
      }
    ]

const MobileNavFull =()=>{
    const [open , setOpen] = useState<OpenClose>('CLOSED')
    return(
    <div className={styles.mobilenavfull}>
        <Hamburger showUI={setOpen} />
        {open === 'OPEN'?(
         <div className={styles.mobileNavLayover}>
            <MobileNav NavLinks={navLinks} />
         </div>
        ):null}
    </div>
    )
}

export default MobileNavFull;