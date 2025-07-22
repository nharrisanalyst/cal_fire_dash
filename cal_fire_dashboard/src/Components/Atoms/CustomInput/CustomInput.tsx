import {useState} from 'react';
import type {ChangeEvent} from 'react';
import type { FormEvent } from 'react';
import styles from './customInput.module.scss';
import Search  from '../../../ImageComponents/search.svg?react';
import CustomButtom from '../CustomButtom/CustomButtom';

export type CustomInputProps ={
    validateInput:(inputvalue:string)=>boolean;
    placeholderText?:string;
    applyInput:(input:string|number)=>void;
    id:string;
    validationErrWarning:string;
}

const CustomInput =({id, 
                    validateInput, 
                    placeholderText, 
                    applyInput, 
                    validationErrWarning, 
                }:CustomInputProps)=>{
    const [inputText, setInputText] = useState<string>("");
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
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                {validationErr?(<label className={styles.validationErrorWarning} >{validationErrWarning}</label>):null}
                <div className={styles.inputContainer}>
                    <input onChange={handleOnChange}  type='text' id={id} name={id} placeholder={placeholderText}></input>
                    <label> 
                        <button type="submit" aria-label="Submit"><Search /></button>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default CustomInput;

