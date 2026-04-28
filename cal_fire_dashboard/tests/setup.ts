import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import {vi} from 'vitest';
import { readFileSync } from 'fs'
import '@testing-library/jest-dom'




// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
})

vi.stubGlobal('fetch', async(url:string)=>{
  if (url === '/json/zip_cname.json'){
    return {
      json: async () => JSON.parse(readFileSync('public/json/zip_cname.json', 'utf-8'))
    } as Response
  }
  if (url === '/topoJson/ca_zip.json'){
    return {
       json: async () => JSON.parse(readFileSync('public/topoJson/ca_zip.json', 'utf-8')),
       ok:true
    } as Response 
  }
  if (url === 'https://api.weather.gov/alerts/active'){
    return {
       json: async () => JSON.parse(readFileSync('public/json/active_alerts.geojson', 'utf-8')),
       ok:true
    } as Response 
  }
})
