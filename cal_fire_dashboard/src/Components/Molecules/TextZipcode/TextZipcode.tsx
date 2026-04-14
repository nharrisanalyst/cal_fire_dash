import MainText from "../../Atoms/MainText/MainText"
import CustomInput from "../../Atoms/CustomInput/CustomInput"
import { validateZipcode } from "../../Atoms/CustomInput/utils/validateZipcode"
import { useNavigate } from "react-router-dom";
import styles from './textZipcode.module.scss'


const TextZipCode = ()=>{
    const navigate = useNavigate()
   
    const updateZipCode=(zip:string|number):void =>{
        let zipInt = zip;
            zipInt = String(zipInt)
        const pattern = /9\d{4}/;
        const flagsString = "g";
        const rg = new RegExp(pattern, flagsString)
        const matches = zipInt.match(rg)
        if(matches != null){
        navigate(`/dashboard/${matches[0]}`)
        }
   }
    return(
    <div className={styles.textAndInput}>
        <MainText lineOne="Analyze. Insure." lineTwo="Protect. Secure." color="white" />
        <CustomInput   id='validatextzipcode' 
                        validateInput={validateZipcode} 
                        placeholderText="Enter a Valid California Zip code"  
                        applyInput={updateZipCode}
                        validationErrWarning='Please provide a valid California Zip Code'
                        
                        />
    </div>
    )
}

export default TextZipCode