import type { CountyDataType } from "../../../Atoms/County/County"
import type { ZipData } from '../../../../hooks/useGetZipcodes'
import { groupByCity } from "./groupByCity";

export const groupByCounty=(data:ZipData[]):CountyDataType =>{
      const countyData:CountyDataType ={};

      data.forEach((d)=>{
        if(!countyData[d.county]) {countyData[d.county]={}}
      })
      
     Object.keys(countyData).forEach((cnty)=>{
        const filterZipData = data.filter(d=>d.county===cnty)
        countyData[cnty] = groupByCity(filterZipData)
     })

      return countyData;
}