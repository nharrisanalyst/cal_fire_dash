import { useState } from 'react';
import type { FormEvent } from 'react'
import styles from './SearchHeader.module.scss'
import CustomButtom from '../../Atoms/CustomButtom/CustomButtom';

import Search  from '../../../ImageComponents/search.svg?react';

export type CustomInputProps ={
    validateInput:(inputvalue:string)=>boolean;
    placeholderText?:string;
    applyInput:(input:string|number)=>void;
    id:string;
    validationErrWarning:string;
    onChange?:(input:string)=>void;
}


const SearchHeader =({ 
                        validateInput,
                        placeholderText,
                        applyInput,
                        id,
                        validationErrWarning,
                    }:CustomInputProps)=>{
    const [validationErr, setValidationErr] = useState<boolean>(false);
    
        const handleSubmit = (e:FormEvent<HTMLFormElement>):void =>{
            e.preventDefault();
            const form = e.currentTarget;
            const textElement = form.elements.namedItem(id) as HTMLInputElement;;
            const value = textElement.value;
    
            const validInput = validateInput(value);
            if(validInput){
                setValidationErr(false)
                applyInput(value)
            }else{
                console.log('this is the test', validationErrWarning)
                setValidationErr(true)
            }
        }

        const handleOnChange =(e:ChangeEvent<HTMLInputElement>):void =>{
                 if(validationErr){
                    setValidationErr(false)
                 }
            }
    
    return(
            <div className={styles.searchheader}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    {validationErr?(<label className={styles.validationErrorWarning}>{validationErrWarning}</label>):null}
                    <div className={styles.inputContainer}>
                        <input onChange={handleOnChange}  type='text' id={id} name={id} placeholder={placeholderText}></input>
                        <label> 
                            <button type="submit" aria-label="Submit"><Search /></button>
                        </label>
                    </div>
                    <div className={styles.customButton}>
                            <CustomButtom buttonLabel='search' type='submit'  /> 
                    </div>
                </form>
            </div>
    )
}

export default SearchHeader;