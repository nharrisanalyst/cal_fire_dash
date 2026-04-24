import { type FireAlert } from '../useGetAlerts'
import { loadZipcodes, type ZipcodeType } from './loadZipcodes/loadZipcodes';

export const filterAlertsByCname =(zipCnames:string[], alertCnames:string[]):boolean=>{
  // const intersect = set_1.intersection(set_2);   2027 emcascript feature
  // we are taking two sets and seeing if there is any instersection between the two
  // this is a 2027 ecma feature todo in the future 
    const set_1 = new Set(zipCnames);
    const set_2 = new Set(alertCnames);
    const instersection = [...set_1].filter(it=>set_2.has(it));

    return instersection.length ===0?false:true;
             
}

export const trimSAME =(SAME:string[]):string[]=>(
  SAME.map(str=>str.slice(1))
);



export const mapAlertsToZipcode = (zipcode:string, Alerts:FireAlert[], zipcodes:ZipcodeType):FireAlert[] =>{

  if(zipcodes[zipcode]===undefined) {
    throw new Error('zipcode supplied not found in zipcode json')
  }
  const zipCodeCnames = zipcodes[zipcode].cnames;

  const zipFilteredAlerts = Alerts.filter(a=>{
    const SAME = a.geocode.SAME; //SAME is CNAME data
    const trimmedSame = trimSAME(SAME); // Trim becuase api send a leading indactor for the alert 
    return filterAlertsByCname(zipCodeCnames, trimmedSame);
  })
   return zipFilteredAlerts;
}
