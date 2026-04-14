import styles from './MobileNav.module.scss'
import { Link } from "react-router-dom";

export type MobileNavItem = {
    text:string;
    linkPath:string;
}

type MobileNavProps ={
    NavLinks:MobileNavItem[];
}

const MobileNav =({NavLinks}:MobileNavProps)=>(
    <div className={styles.mobilenav}>
      {
        NavLinks.map((l,i)=>(
          <div key={i} className={styles.mobileNavLink}>
           <Link to={l.linkPath} >{l.text}</Link>
          </div>
        ))
      }
    </div>
)

export default MobileNav;