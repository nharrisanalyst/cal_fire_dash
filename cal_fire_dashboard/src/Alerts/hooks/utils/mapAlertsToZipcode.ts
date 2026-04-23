import { type FireAlert } from '../useGetAlerts'

export const mapAlertsToZipcode = async (zipcode:string, Alerts:FireAlert[]):Promise<FireAlert[]> =>{
  const zipcodesResp =  await fetch('/json/zip_cname.json');
  const zipcodes = await zipcodesResp.json();
  if(zipcodes[zipcode]===undefined) {
    throw new Error('zipcode supplied not found in zipcode json')
  }
  const zipCodeCnames = zipcodes[zipcode].cnames;

  const zipFilteredAlerts = Alerts.filter(
    a=>{
      const cnames = a.geocode.SAME
      const cnamesStripped = cnames.map(c=>c.slice(1));
      for(let i=0; i<cnames.length; i++){
        const cname = cnamesStripped[i];
         if(zipCodeCnames.includes(cname)){
          return true;
         }
      }
      return false;
    }
  )
   return zipFilteredAlerts;
}
