import {useState, useMemo} from 'react';
import type { ZipCodeDataList, DataAvgList} from '../api/models'
import type {FireDashProps} from '../Components/Organisms/FireDash/FireDash';
import {makeDashTopStats, makeDashLineData} from '../Pages/Dashboard/utilis/makeDashStats'
import  { BASE_URL } from '../api/api';
import {useQuery} from '@tanstack/react-query';

export type Loading = 'Loading Data' | 'Data Loaded'| 'Data Err'|'Zipcode Undefined'

export type DashData = Omit<FireDashProps, 'zipcode'>;

type Zipcode= number|string|undefined;

type GetDashboardDataReturn ={
    data:DashData,
    isLoading:boolean, 
    error:unknown,
    isError:boolean
}

const fetchZipcodeData = async (zipcode:Zipcode):Promise<ZipCodeDataList>=>{
            const respZip = await fetch (`${BASE_URL}/data/zipcode/${zipcode}`);
            return await respZip.json() as ZipCodeDataList;
}

 

const fetchZipAvg =  async ():Promise<DataAvgList>=>{
            const respZip = await fetch (`${BASE_URL}/data/avgdata`);
            return await respZip.json() as DataAvgList;
}


export const useGetDashboardData = (zipcode:Zipcode):GetDashboardDataReturn =>{

    const {
        data:zipData,
        isError:isZipError,
        error: dataError,
        isLoading:isLoadingData,
    } = useQuery({
        queryKey:[`${zipcode}`],
        queryFn:() => fetchZipcodeData(zipcode),
    })

    const {
        data:avgData,
        isError:isAvgError,
        error: avgError,
        isLoading:isLoadingAvg,
    } = useQuery({
        queryKey:['avg'],
        queryFn:fetchZipAvg,
    })

    const isLoading = isLoadingData || isLoadingAvg;
    const isError = isAvgError || isZipError;
    const error = isZipError?dataError:avgError;

    const data = !isError &&
                 !error &&
                 !isLoading
                 && avgData
                 && zipData?{
                    topStats:makeDashTopStats(zipData.data, avgData.avg_data),
                    lineCharstItems:makeDashLineData(zipData.data, avgData.avg_data)
                 }:{
                    topStats:[],
                    lineCharstItems:[]
                 };

    return {
        data,
        isLoading,
        isError,
        error
    }
}