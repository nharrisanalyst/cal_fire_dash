import type { CityDataType } from '../../../Atoms/City/City' 
import type { ZipData } from '../../../../hooks/useGetZipcodes'

export const groupByCity = (data:ZipData[]):CityDataType =>{
        const groupedData:CityDataType = {}
        data.forEach((d)=>{
            if(!groupedData[d.city]){
                groupedData[d.city] = [d.zipcode];
            }else{
                groupedData[d.city].push(d.zipcode);
            }
        })

        return groupedData;
}