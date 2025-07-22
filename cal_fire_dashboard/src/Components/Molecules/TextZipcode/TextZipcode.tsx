import MainText from "../../Atoms/MainText/MainText"
import CustomInput from "../../Atoms/CustomInput/CustomInput"
import { validateZipcode } from "../../Atoms/CustomInput/utils/validateZipcode"
import { useNavigate } from "react-router";
import styles from './textZipcode.module.scss'


const TextZipCode = ()=>{
    const navigate = useNavigate()
   
    const updateZipCode=(zip:string|number):void =>{
        let zipInt = zip;
        if (typeof zip === 'string') {
        zipInt = parseInt(zip);
        }

        navigate(`/dashboard/${zipInt}`)

        
   }
    return(
    <div className={styles.textAndInput}>
        <MainText lineOne="Know. Insure." lineTwo="Save. Protect." color="white" />
        <CustomInput   id='validatexipcode' 
                        validateInput={validateZipcode} 
                        placeholderText="Enter a Valid California Zip code"  
                        applyInput={updateZipCode}
                        validationErrWarning='Please provide a valid California Zip Code'
                        
                        />
    </div>
    )
}

export default TextZipCode