import { useState, useMemo } from 'react';
import type { ChangeEvent } from 'react'
import type { FormEvent } from 'react'
import styles from './SearchHeader.module.scss'
import CustomButtom from '../../Atoms/CustomButtom/CustomButtom';
import InputTextOptions from '../../Atoms/InputTextOptions/InputTextOptions';
import { useSearchSuggestion } from '../../../hooks/useSeachSuggestion';

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
    const [input, setInput] = useState<string>('')
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
            e.preventDefault()
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
            setInput(value);
            setInput('')
        }
    
    return(
            <div className={styles.searchheader}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    {validationErr?(<label className={styles.validationErrorWarning}>{validationErrWarning}</label>):null}
                    <div className={styles.inputContainer}>
                        <input value={input} onChange={handleOnChange}  type='text' autoComplete="off" id={id} name={id} placeholder={placeholderText}></input>
                           <div className={styles.optionsPlacement}>
                            <InputTextOptions onClick={onClickList}  listName={`${id}-list`} list={suggestions} /> 
                           </div>
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