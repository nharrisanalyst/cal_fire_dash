import {localFilesCache} from '../../../../chache/LocalFilesCache'

const ZPICODES_CACHE_KEY = 'ZIPCODES_ALREADY_LOADED';

export const loadZipcodes= async ()=>{
  //check cache if data is already there
  if(localFilesCache.hasCache({key:ZPICODES_CACHE_KEY})) return localFilesCache.getCache({key:ZPICODES_CACHE_KEY});
  //fetch data since it is not in the cache
  const zipResp = await fetch('/json/zip_cname.json');
  const zipcodeJSON = zipResp.json();
  //cache data and return the data form the cache
  localFilesCache.setCache({key:ZPICODES_CACHE_KEY, data:zipcodeJSON});
  return localFilesCache.getCache({key:ZPICODES_CACHE_KEY});

}