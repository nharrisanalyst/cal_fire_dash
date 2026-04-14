//must be used with an input text
import type { MouseEvent } from 'react';
import styles from './inputTextOption.module.scss';

type InputTextOptionsProps ={
    listName:string;
    list:string[] | number[];
    onClick:(value:string)=>void;
}

const InputTextOptions =({listName, list, onClick}:InputTextOptionsProps)=>{
    const handleOnClick = (e:MouseEvent<HTMLLIElement>) =>{
        const value = e.currentTarget.textContent
        if(typeof value === 'string'){
            onClick(value);
        }
    }
    if(list.length ===0) return null;
    return (
       <ul className={styles.list} id={listName} > 
        {
            list.map((l)=>(
                <li key={l} onClick={handleOnClick} className={styles.listItem} value={l} >{l}</li>
            ))
        }
    </ul>
    )
}

export default InputTextOptions;