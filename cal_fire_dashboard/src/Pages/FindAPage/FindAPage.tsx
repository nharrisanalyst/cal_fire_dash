import styles from './FindAPage.module.scss'
import { useLocation } from 'react-router-dom'
import FindAForm from '../../Components/Molecules/FindAForm/FindAForm';

const getType = (pathname:string):"findanagent" | "buyhomeins" | "buycarins"|"" =>{
    if(pathname.includes('findanagent')) return 'findanagent';
    if(pathname.includes('buyhomeins')) return 'buyhomeins';
    if(pathname.includes('buycarins')) return 'buycarins';
    return "";
}

const FindAPage =()=>{
    const { pathname } = useLocation();
    const type = getType(pathname);
    if(type !=""){
    return(
        <div className={styles.findapage}>
            <FindAForm findType={type} />
        </div>
        )
    }
    return(
        <div>
            error form type not reconized
        </div>
    )
}

export default FindAPage;