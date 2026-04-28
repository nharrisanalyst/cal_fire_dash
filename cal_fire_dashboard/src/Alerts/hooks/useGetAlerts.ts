import {useEffect, useState} from 'react';
import { mapAlertsToZipcode } from './utils/mapAlertsToZipcode';
import { loadZipcodes } from './utils/loadZipcodes/loadZipcodes';
import {useQuery} from '@tanstack/react-query';
import {type AlertType, AlertFeatures} from '../types/alerts.types';



type EventFilter = 'Red Flag Warning' | 'Fire Weather Watch'| "Fire Warning";

export type FireAlert = Omit<AlertType, 'event'> & {
  event:EventFilter
};


// Promise for react query 
// queries https://api.weather.gov/alerts/active 
// returns geojson data 
// data is in resp.json().features.properties
export const getAlerts = async (): Promise<AlertType[]>=>{
     const resp = await fetch('https://api.weather.gov/alerts/active');
     const alertGeoJSON = await resp.json();
     const parsedData = AlertFeatures.parse(alertGeoJSON)
     return parsedData.features.map(d=>d.properties);
}

//filters All the Alerts to only FireAlerts
export const AlertsAdapter =(Alerts:AlertType[]):FireAlert[]=>{

    const FireEvents:EventFilter[] = ['Red Flag Warning', 'Fire Weather Watch',  "Fire Warning"] as const;
    const isFireEvent = (event:string):event is EventFilter =>{
      return FireEvents.includes(event as EventFilter)
    }

    const FireAlerts = Alerts.filter(
      (d): d is FireAlert => isFireEvent(d.event)
    )
    
    return FireAlerts;
}

export const useGetAlerts = (zipcode:string)=>{
 const [fireAlertsZip, setFireAlerts ] = useState<FireAlert[] |null>(null)
 const [fireAlertsLoading, setFireAlertsLoading] = useState<boolean>(false);


 const {
  data:fireAlertsData,
  isLoading: isLoadingAlerts,
  isError: isErrorAlerts,
  error: errorAlerts
 } = useQuery({
  queryKey:['alerts'],
  queryFn:getAlerts,
  select:(alerts)=>AlertsAdapter(alerts),
  refetchInterval: 60000,
 })



 useEffect(()=>{

  const setZipcodeData =async ()=>{
    if(fireAlertsData){
      setFireAlertsLoading(true);

      const zipcodeData = await loadZipcodes();
      const zipAlerts = mapAlertsToZipcode(zipcode,fireAlertsData, zipcodeData);
      setFireAlerts(zipAlerts);
      setFireAlertsLoading(false);
    }
  }

  setZipcodeData();
 },[fireAlertsData, zipcode])

const isLoading = isLoadingAlerts || fireAlertsLoading;
const data = fireAlertsZip
const isError = isErrorAlerts;
const error = errorAlerts

 return {
  data,
  isLoading,
  error,
  isError
 }

}
 
    
  
