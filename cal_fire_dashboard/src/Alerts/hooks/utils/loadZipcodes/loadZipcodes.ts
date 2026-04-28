import {localFilesCache} from '../../../../chache/LocalFilesCache'

const ZPICODES_CACHE_KEY = 'ZIPCODES_ALREADY_LOADED';

import * as z from 'zod';

export const Zipcode = z.record(
  z.string(), z.object({
    zipcode:z.string(),
    cnames:z.array(z.string()),
    state: z.string(),
    name:z.string(),
  })
 )


export type ZipcodeType = z.infer<typeof Zipcode>;

export const loadZipcodes= async ():Promise<ZipcodeType>=>{
  //check cache if data is already there
  if(localFilesCache.hasCache({key:ZPICODES_CACHE_KEY})) return localFilesCache.getCache({key:ZPICODES_CACHE_KEY}) as ZipcodeType;
  //fetch data since it is not in the cache
  const zipResp = await fetch('/json/zip_cname.json');
  const zipcodeJSON = await zipResp.json();
  // run time check typing 
  // we can savely assert what we put into the cache is ZipcodeType
  const Parsed_ZipcodeJSON = Zipcode.parse(zipcodeJSON) 
  //cache data and return the data form the cache
  localFilesCache.setCache({key:ZPICODES_CACHE_KEY, data:Parsed_ZipcodeJSON});
  return localFilesCache.getCache({key:ZPICODES_CACHE_KEY}) as ZipcodeType;;


}