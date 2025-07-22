import {useState, useEffect} from 'react';
import type { ZipCodeDataList, DataAvgList} from '../api/models'
import type {FireDashProps} from '../Components/Organisms/FireDash/FireDash';
import {makeDashTopStats, makeDashLineData} from '../Pages/Dashboard/utilis/makeDashStats'
import api from '../api/api';

type Loading = 'Loading Data' | 'Data Loaded'| 'Data Err'|'Zipcode Undefined'

export const useGetDashboardData = (zipcode:number|string|undefined):[FireDashProps,Loading] =>{
    const initDataState: FireDashProps= {
                    topStats:[],
                    lineCharstItems:[]
                }
    const [data, setData] =useState<FireDashProps>(initDataState)
    const [loading, setLoading] =useState<Loading>('Loading Data');

    
    
    useEffect(()=>{
        
        if(zipcode === undefined){
            setData(initDataState)
        setLoading('Zipcode Undefined');
        return; 
        }

        const getData = async()=>{
            try{
                const respZip = await api.get(`/data/zipcode/${zipcode}`)
                const respAvg = await api.get('/data/avgdata')
                const respZipData:ZipCodeDataList = respZip.data;
                const avgData:DataAvgList      = respAvg.data;
                console.log(respZipData,avgData, 'this is the data');
                const dashData:FireDashProps ={
                    topStats:makeDashTopStats(respZipData.data, avgData.avg_data),
                    lineCharstItems:makeDashLineData(respZipData.data, avgData.avg_data)
                }
                setData(dashData);
                setLoading('Data Loaded');
            }catch(err){
                console.log('there was an error fetching data', err)
                setLoading('Data Err');
            }
        }
        getData();
    },[zipcode])

    return [data, loading];
}