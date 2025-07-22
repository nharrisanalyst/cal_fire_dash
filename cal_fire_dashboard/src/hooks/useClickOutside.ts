import {useEffect} from 'react';
import type { RefObject} from 'react';

export const useClickOutside = (ref:RefObject<HTMLElement | null>, onClickOutSide:()=>void) =>{
    useEffect(()=>{
        const handleClick =(event:MouseEvent)=>{
            if(ref.current && !ref.current.contains(event.target as Node)){
                onClickOutSide();
            }
        }
        document.addEventListener('mousedown', handleClick);
        return ()=>{
            document.removeEventListener('mousedown', handleClick);
        }
    },[ref,onClickOutSide])
}
