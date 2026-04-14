import { useNavigate } from "react-router-dom";
import styles from './SecondHeader.module.scss'
import SearchHeader from '../SearchHeader/SearchHeader';
import { validateZipcode } from '../../Atoms/CustomInput/utils/validateZipcode';

const SecondHeader =()=>{
    const navigate = useNavigate();

    const applyInput = (zip:string|number) =>{
        let zipInt = zip;
        if (typeof zip === 'string') {
        zipInt = parseInt(zip);
        }

        navigate(`/dashboard/${zipInt}`)
    }
    
    return(
        <div className={styles.secondheader}>
            <SearchHeader 
                validateInput={validateZipcode}
                placeholderText={'Enter a California Zip code'}
                applyInput={applyInput}
                id='zipcodeform'
                validationErrWarning='Error a NON valid California Zip WAS Submitted'
            />
        </div>
    )
}

export default SecondHeader;