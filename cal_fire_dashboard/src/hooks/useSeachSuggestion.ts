import {useState, useEffect} from 'react'
import api from '../api/api';

export type SearchSuggestionType = {
    suggestion:string | number;
}

export const useSearchSuggestion =({suggestion}:SearchSuggestionType):string[] =>{
    const [data, setData] = useState<string[]>([])

    useEffect(()=>{
        if (suggestion === '') {
            setData([]);
            return;
        }

        let path = 'searchhelp/cities';
        if(typeof suggestion === "number") path = 'searchhelp/zipcodes';

        const getSuggestions = async()=>{
            try{
                const respSug = await api.get(path, {
                    params: {
                        search:suggestion
                    }
                })
                const sugData:string[] = respSug.data.suggestions['suggestionList'];
                setData(sugData);
            }catch(err){
                console.log('there was an error fetching data', err)
            }

        }
        getSuggestions();
    },[suggestion])
        
    return data;
}