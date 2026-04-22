import {useQuery} from '@tanstack/react-query';
import {type AlertType, AlertFeatures} from '../types/alerts.types';

type Zipcode = string | number
type EventFilter = 'Red Flag Warning' | 'Fire Weather Watch';




// Promise for react query 
// queries https://api.weather.gov/alerts/active 
// returns geojson data 
// data is in resp.json().features.properties
export const getAlerts = async (): Promise<AlertType[]>=>{
     const resp = await fetch('https://api.weather.gov/alerts/active');
     const alertGeoJSON = await resp.json();
     const parsedData = AlertFeatures.parse(alertGeoJSON)
     return parsedData.features;
}

// export const useGetAlerts =({zipcode}:Zipcode)=>{
//   const {
//     data:alerts,
//     isloading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey:['alerts'],
//     queryFn:getAlerts,
//   })
    
  

// }