import {useState, useMemo} from 'react';
import type {ChangeEvent} from 'react';
import type { FormEvent } from 'react';
import styles from './customInput.module.scss';
import Search  from '../../../ImageComponents/search.svg?react';
import InputTextOptions from '../InputTextOptions/InputTextOptions';
import { useSearchSuggestion } from '../../../hooks/useSeachSuggestion';

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
    const [input, setInput] = useState<string>('')
    const [validationErr, setValidationErr] = useState<boolean>(false);

    const suggestion:string | number = useMemo(
        ()=>{
              return isNaN(parseInt(input))?input:parseInt(input);
        }, 
        [input]
    );
   
    const suggestions = useSearchSuggestion({suggestion:suggestion});
    
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
            setValidationErr(true)
        }
    }

    const handleOnChange =(e:ChangeEvent<HTMLInputElement>):void =>{
        e.preventDefault(); 
        const value = e.target.value;
        if(validationErr){
            setValidationErr(false)
        }
        setInput(value);
       
    }
    
    const onClickList = (value:string)=>{
        
        if(suggestions.includes(value)){
            applyInput(value);
        }
    }
    
    return(
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                {validationErr?(<label className={styles.validationErrorWarning} >{validationErrWarning}</label>):null}
                <div className={styles.inputContainer}>
                    <input onChange={handleOnChange}  type='text' id={id} name={id} list={`${id}-list`} autoComplete="off" placeholder={placeholderText} ariel-label='search' aria-autocomplete='list'></input>
                    <InputTextOptions onClick={onClickList}  listName={`${id}-list`} list={suggestions} />
                    <label> 
                        <button type="submit" aria-label="Submit"><Search /></button>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default CustomInput;

