export class LocalFilesCache{
  cache:Map<string, unknown>;
  constructor(){
    this.cache =new Map<string, unknown>();
  }

  setCache({key, data}:{key:string, data:unknown}){
    this.cache.set(key,data);
  }
  hasCache({key}:{key:string}){
    return this.cache.has(key);
  }

  getCache({key}:{key:string}){
    return this.cache.get(key);
  }
}

export const localFilesCache = new LocalFilesCache();