import {useState, useEffect} from 'react';
import type { Loading } from './useGetDashboardData'
import api from '../api/api';

export type ZipData = {
    city:string;
    county:string;
    zipcode:number;
}

type Loading = 'Loading Data' | 'Data Loaded'| 'Data Err'

export const useGetZipCodes=():[ZipData[],Loading] =>{
        const initDataState:ZipData[] =[]
        const [data, setData] =useState<ZipData[]>(initDataState)
        const [loading, setLoading] =useState<Loading>('Loading Data');

        useEffect(()=>{
        const getData = async()=>{
            try{
                const respZip = await api.get(`zipcode/all`)
                const respZipData:ZipData[] = respZip.data.data;
                setData(respZipData);
                setLoading('Data Loaded');
            }catch(err){
                console.log('there was an error fetching data', err)
                setLoading('Data Err');
            }
        }
        getData();
    },[])

    return [data, loading];
}