// cache to cahce local files once they are loaded
// cache Record<string, unknown>
// setCache sets key to data
// hasCache checks that key is in cache 
// getCache return data form key

import {test} from 'vitest';
import {LocalFilesCache} from './LocalFilesCache'

let localFilesCache!: LocalFilesCache;

beforeEach(()=>{
  localFilesCache = new LocalFilesCache();
})


const data ={
  name:'this thing',
  day:"Tue"
}

const key = 'User';

test('set data with a key hasCache returns true if the cache has this key in it', ()=>{
  localFilesCache.setCache({key, data});
  
  const keyIsPresent = localFilesCache.hasCache({key})
  const keyIsNotPresent = localFilesCache.hasCache({key:'random123'});
  
  expect(keyIsPresent).toBeTruthy();
  expect(keyIsNotPresent).toBeFalsy();
});


test('getCache returns previusly set data', ()=>{
  localFilesCache.setCache({key, data});
  const gotData = localFilesCache.getCache({key})

  expect(gotData).toStrictEqual(data);
});

// test();