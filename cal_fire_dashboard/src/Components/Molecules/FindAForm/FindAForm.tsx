import type { FormEvent } from 'react';
import styles from './FindAForm.module.scss'
import formText from '../../../i18n/findAFormText.json'

import api from '../../../api/api'

type FindAFormProps ={
    findType:"findanagent" | "buyhomeins" | "buycarins";
}

type FormDataType ={
    type:'FindAnAgent'| 'BuyHomeIns'|'BuyCarIns';
    name:string;
    email:string;
    message:string;
}

const formTypeMap: Record<FindAFormProps['findType'], FormDataType['type']> ={
    "findanagent":'FindAnAgent',
    "buyhomeins":"BuyHomeIns",
    "buycarins":'BuyCarIns'
}

const FindAForm =({findType}:FindAFormProps)=>{
    const text = formText[findType];

    const handleOnSubmit=(e:FormEvent<HTMLFormElement>):void =>{
        e.preventDefault();
        const type = formTypeMap[findType]
        const form = e.currentTarget;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLInputElement).value;
        
        const formObject:FormDataType={
            type,
            name,
            email,
            message
        }
        const formData = new FormData();
        formData.append('type', formObject.type)
        formData.append('name', formObject.name)
        formData.append('email', formObject.email)
        formData.append('message', formObject.message)

        const sendPostData=async(formData:FormData)=>{
            try{
                    const resp = await api.post(`/email`,formData)
                    console.log(resp);
                }catch(err){
                    console.log('there was an error sending the data', err)
                }
        }

        sendPostData(formData);

    }
    
    return(
        <div className={styles.findaform}>
            <div className={styles.formDescription}>
                <h1>{text.h1}</h1>
                <div>{text.description}</div>
            </div>
            <div className={styles.formCont}>
                <form onSubmit={handleOnSubmit}>
                    <h3>{text.formTitle}</h3>
                    <p>
                        <label htmlFor='name'>Name:&nbsp;</label>
                        <input type="text" id="name" name="name" />
                    </p>
                    <p>
                        <label htmlFor='email'>Email:&nbsp;</label>
                        <input type="email" id="email" name='email'/>
                    </p>
                    <p>
                        <label htmlFor='message'>Message:&nbsp;</label>
                        <textarea id="message" name='message' defaultValue={"Please iclude City, Zipcode, and anything else you would like to include"}></textarea>
                    </p>

                    <p>
                        <button type='submit' >Send</button>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default FindAForm;