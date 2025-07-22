import type {ReactNode} from 'react'
import { Link } from 'react-router-dom';
import styles from './InfoAndLink.module.scss'

type InfoAndLinkProps ={
    linkText:string;
    linkTo:string;
    children?:ReactNode;
}

const InfoAndLink =({linkText, linkTo, children}:InfoAndLinkProps)=>(
    <div className={styles.infoandlink}>
        <div className={styles.childrenCont}>
            {children}
        </div>
        <div className={styles.linkStyles}>
            <Link to={linkTo}><button type='button'>{linkText}</button></Link>
        </div>
    </div>
)

export default InfoAndLink;